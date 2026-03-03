import { getBlogPosts } from '@/lib/supabase'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

export const metadata = {
  title: 'Blog — Creator AI',
  description: 'Tips, tutorials, and updates about AI video editing, content creation, and Creator AI.',
}

const LANG_NAMES: Record<string, string> = {
  en: 'English', ru: 'Русский', es: 'Español', fr: 'Français',
  de: 'Deutsch', pt: 'Português', tr: 'Türkçe', ar: 'العربية', he: 'עברית'
}

export default async function BlogPage({ searchParams }: { searchParams: { lang?: string } }) {
  const lang = searchParams.lang && LANG_NAMES[searchParams.lang] ? searchParams.lang : 'en'
  const posts = await getBlogPosts('video', lang)
  const isRTL = lang === 'ar' || lang === 'he'

  return (
    <div className="max-w-4xl mx-auto px-6 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-brand">Blog</span>
        </h1>
        <LanguageSwitcher currentLang={lang} />
      </div>
      <p className="text-white/50 text-lg mb-12">
        {lang === 'ru' ? 'Советы, руководства и обновления для создателей контента.' :
         lang === 'es' ? 'Consejos, tutoriales y actualizaciones para creadores.' :
         lang === 'fr' ? 'Conseils, tutoriels et mises à jour pour les créateurs.' :
         lang === 'de' ? 'Tipps, Tutorials und Updates für Content-Ersteller.' :
         lang === 'pt' ? 'Dicas, tutoriais e atualizações para criadores.' :
         lang === 'tr' ? 'İçerik üreticileri için ipuçları, eğitimler ve güncellemeler.' :
         lang === 'ar' ? 'نصائح ودروس وتحديثات لصانعي المحتوى.' :
         lang === 'he' ? 'טיפים, מדריכים ועדכונים ליוצרי תוכן.' :
         'Tips, tutorials, and updates for creators.'}
      </p>

      {posts.length === 0 ? (
        <p className="text-white/40">
          {lang === 'ru' ? 'Пока нет статей. Загляните позже!' :
           lang === 'es' ? 'Aún no hay publicaciones. ¡Vuelve pronto!' :
           'No posts yet. Check back soon!'}
        </p>
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
                    {new Date(post.published_at).toLocaleDateString(lang === 'en' ? 'en-US' : lang, { year: 'numeric', month: 'long', day: 'numeric' })}
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
