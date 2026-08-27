'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface ProductModel3DProps {
  src: string;
  className?: string;
}

// Plain three.js, no @react-three/fiber/react-reconciler — that combo breaks
// under Next.js App Router's multi-layer (rsc/ssr/browser) React bundling
// ("Cannot read properties of undefined (reading 'ReactCurrentOwner')").
// Driving three.js imperatively from a ref sidesteps the whole class of bug.
export const ProductModel3D: React.FC<ProductModel3DProps> = ({ src, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frameId: number;
    let disposed = false;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.05, 100);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 1.1));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.9);
    fillLight.position.set(-4, 2, -3);
    scene.add(fillLight);
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.6);
    rimLight.position.set(0, 3, -5);
    scene.add(rimLight);

    // Real drag-to-orbit, not a canned spin — plus a slow idle auto-rotate
    // that pauses the moment the user grabs the model.
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 3.2;
    controls.minPolarAngle = Math.PI * 0.16;
    controls.maxPolarAngle = Math.PI * 0.62;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    renderer.domElement.style.cursor = 'grab';
    renderer.domElement.addEventListener('pointerdown', () => {
      renderer.domElement.style.cursor = 'grabbing';
    });
    renderer.domElement.addEventListener('pointerup', () => {
      renderer.domElement.style.cursor = 'grab';
    });

    let model: THREE.Object3D | null = null;

    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load(
      src,
      (gltf) => {
        if (disposed) return;
        model = gltf.scene;

        // Auto-fit: center the model at the origin and frame the camera to
        // its actual bounding box, instead of guessing scale/position.
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);

        model.position.sub(center);
        model.position.y += size.y / 2;
        scene.add(model);

        const radius = size.length() / 2;
        const fitDistance = radius / Math.sin((Math.PI * camera.fov) / 360);

        controls.target.set(0, size.y * 0.35, 0);
        controls.minDistance = fitDistance * 0.5;
        controls.maxDistance = fitDistance * 1.2;

        // Default angle: near-overhead "flat lay" view, matching the reference shot.
        const defaultPolar = Math.PI * 0.19;
        const defaultAzimuth = Math.PI * 0.06;
        const offset = new THREE.Vector3().setFromSphericalCoords(
          fitDistance * 0.95,
          defaultPolar,
          defaultAzimuth
        );
        camera.position.copy(controls.target).add(offset);
        camera.near = fitDistance / 100;
        camera.far = fitDistance * 100;
        camera.updateProjectionMatrix();
        controls.update();
      },
      undefined,
      (err) => console.error('GLTF load failed:', err)
    );

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = container;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    // Otherwise this WebGL render loop (plus OrbitControls' damping math)
    // runs forever at 60fps even while the canvas is scrolled far off-screen,
    // competing with scroll compositing on the main thread — a real
    // contributor to page-wide scroll jank on a page with several of these.
    let running = false;
    const animate = () => {
      if (!running) return;
      frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    const start = () => {
      if (running) return;
      running = true;
      animate();
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frameId);
    };
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0 }
    );
    visibilityObserver.observe(container);

    return () => {
      disposed = true;
      stop();
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
          materials.forEach((mat) => mat.dispose());
        }
      });
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [src]);

  return <div ref={containerRef} className={className} />;
};
