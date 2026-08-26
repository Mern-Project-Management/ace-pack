'use client';

import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/lib/data/blogs';
import { Container } from '../ui/Container';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-[#FAF8F4] text-[#1A1D20] border-b border-[#E6DBC6]/40 overflow-hidden">
      <Container>
        
        {/* Left-Aligned Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16" data-aos="fade-right">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-extrabold text-[#b89858] uppercase tracking-wider block mb-2">
              OUR BLOG & INSIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D20] tracking-tight">
              Latest Food Packaging Insights & News
            </h2>
          </div>

          <Link
            href="/blog"
            className="text-xs font-bold text-[#b89858] hover:underline uppercase tracking-wider flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, idx) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="bg-white rounded-3xl overflow-hidden border border-[#E6DBC6] hover:border-[#b89858] transition-all duration-300 hover:shadow-xl flex flex-col justify-between group text-left"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-[#b89858] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-[11px] text-gray-500 mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#b89858]" />
                      {post.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#b89858]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1A1D20] mb-3 group-hover:text-[#b89858] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#b89858]">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </Container>
    </section>
  );
};
