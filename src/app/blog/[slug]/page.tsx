import { getBlogPost, getBlogPosts } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  if (!post) return { title: 'Not Found' }
  return {
    title: `${post.seo_title || post.title} — Creator AI`,
    description: post.seo_description || post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  if (!post) notFound()

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <a href="/blog" className="text-brand text-sm hover:underline mb-6 block">← Back to Blog</a>
      
      <div className="flex items-center gap-3 mb-4">
        {post.tags?.slice(0, 4).map((tag) => (
          <span key={tag} className="text-xs text-brand bg-brand/10 px-2 py-0.5 rounded-full">{tag}</span>
        ))}
      </div>
      
      <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
      
      <div className="flex items-center gap-4 text-sm text-white/40 mb-8">
        <span>{post.author}</span>
        <span>·</span>
        <span>{new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>

      {post.featured_image && (
        <img src={post.featured_image} alt={post.title}
             className="w-full rounded-2xl mb-10 max-h-[400px] object-cover" />
      )}

      <div className="prose prose-invert prose-lg max-w-none
        prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-white/70 prose-p:leading-relaxed
        prose-a:text-brand prose-a:no-underline hover:prose-a:underline
        prose-li:text-white/70
        prose-strong:text-white
        prose-table:border-white/10 prose-th:text-white prose-td:text-white/70"
           dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className="mt-16 p-8 rounded-2xl bg-brand/10 border border-brand/30 text-center">
        <h3 className="text-2xl font-bold mb-3">Ready to try Creator AI?</h3>
        <p className="text-white/60 mb-6">Remove bad takes and add subtitles in seconds.</p>
        <a href="https://apps.apple.com/us/app/creator-ai/id6757284712"
           className="inline-block bg-brand hover:bg-brand-light font-semibold px-6 py-3 rounded-full transition">
          Download Free
        </a>
      </div>
    </article>
  )
}
