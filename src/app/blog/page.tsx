import { getBlogPosts } from '@/lib/supabase'
import Link from 'next/link'

export const metadata = {
  title: 'Blog — Creator AI',
  description: 'Tips, tutorials, and updates about AI video editing, content creation, and Creator AI.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-brand">Blog</span>
      </h1>
      <p className="text-white/50 text-lg mb-12">Tips, tutorials, and updates for creators.</p>

      {posts.length === 0 ? (
        <p className="text-white/40">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}
                  className="group block p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand/30 transition">
              <div className="flex flex-col md:flex-row gap-6">
                {post.featured_image && (
                  <img src={post.featured_image} alt={post.title}
                       className="w-full md:w-48 h-32 object-cover rounded-xl" />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {post.tags?.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-brand bg-brand/10 px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-brand transition">{post.title}</h2>
                  <p className="text-white/50 text-sm line-clamp-2">{post.excerpt}</p>
                  <p className="text-white/30 text-xs mt-3">
                    {new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
