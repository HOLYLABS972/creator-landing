import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Creator AI — Remove Bad Takes & Add Subtitles Instantly',
  description: 'AI-powered video cleanup. Remove silences, mistakes, and bad takes automatically. Add clean subtitles in seconds. No timeline editing needed.',
  openGraph: {
    title: 'Creator AI — AI Video Cleanup & Subtitles',
    description: 'Upload your video. AI removes bad takes. Subtitles added automatically. Export & post.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">
        <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="text-xl font-bold">
              <span className="text-brand">Creator</span> AI
            </a>
            <div className="flex items-center gap-6">
              <a href="/blog" className="text-sm text-white/60 hover:text-white transition">Blog</a>
              <a href="https://apps.apple.com/us/app/creator-ai/id6757284712"
                 className="bg-brand hover:bg-brand-light text-white text-sm font-medium px-4 py-2 rounded-full transition">
                Download App
              </a>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
        <footer className="border-t border-white/5 py-12 mt-20">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">© {new Date().getFullYear()} Holylabs Ltd. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-white/40">
              <a href="/blog" className="hover:text-white transition">Blog</a>
              <a href="mailto:dima@holylabs.net" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
