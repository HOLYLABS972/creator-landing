const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uhpuqiptxcjluwsetoev.supabase.co'
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVocHVxaXB0eGNqbHV3c2V0b2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwOTE4OTYsImV4cCI6MjA3MjY2Nzg5Nn0.D_t-dyA4Z192kAU97Oi79At_IDT_5putusXrR0bQ6z8'

const API = `${SUPABASE_URL}/rest/v1`
const headers = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  featured_image: string
  tags: string[]
  status: string
  brand: string
  published_at: string
  created_at: string
  seo_title: string
  seo_description: string
}

export async function getBlogPosts(brand = 'video', language = 'en'): Promise<BlogPost[]> {
  const res = await fetch(
    `${API}/blog_posts?status=eq.published&brand=eq.${brand}&language=eq.${language}&order=published_at.desc&select=id,title,slug,excerpt,author,featured_image,tags,published_at,brand,language`,
    { headers, next: { revalidate: 300 } }
  )
  if (!res.ok) return []
  return res.json()
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const res = await fetch(
    `${API}/blog_posts?slug=eq.${slug}&status=eq.published&select=*`,
    { headers, next: { revalidate: 300 } }
  )
  if (!res.ok) return null
  const posts = await res.json()
  return posts[0] || null
}
