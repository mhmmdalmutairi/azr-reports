import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { posts } from "@/lib/data/blog";
import { Clock, User } from "lucide-react";

export default function BlogPageEN() {
  return (
    <>
      <PageHero badge="Insights" title="Sharing what we've learned" description="Articles and insights from our experience across 150+ projects with 85+ partners" />
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.05}>
                <article className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#FF8C00]/20 transition-all duration-300 card-hover h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#FF8C00]/10 text-[#FF8C00] border border-[#FF8C00]/20">{post.category.en}</span>
                    <span className="text-white/30 text-xs">{post.date}</span>
                  </div>
                  <h2 className="text-lg font-bold text-white mb-3 group-hover:text-[#FF8C00] transition-colors">{post.title.en}</h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">{post.excerpt.en}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 text-white/40 text-xs">
                    <span className="flex items-center gap-1.5"><User size={12} />{post.author.en}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} />{post.readTime} min read</span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
