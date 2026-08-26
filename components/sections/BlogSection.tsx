'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { blogPosts } from '@/lib/data/blogs';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF8F4]">
      <Container>
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-2">
              INSIGHTS & KNOWLEDGE
            </span>
            <h2 className="text-3xl font-extrabold text-[#1A1D20] tracking-tight">
              Latest Packaging Articles
            </h2>
          </div>

          <Link
            href="/blog"
            className="text-xs font-bold text-[#b89858] hover:underline uppercase tracking-wider flex items-center gap-1.5"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E6DBC6] hover:border-[#b89858] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 text-[#b89858] text-[10px] font-bold px-3 py-1 rounded-full border border-[#E6DBC6] uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#b89858]" /> {post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-base font-bold text-[#1A1D20] group-hover:text-[#b89858] transition-colors leading-snug mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#b89858] hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};
