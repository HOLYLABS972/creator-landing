export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center relative">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 text-brand text-sm font-medium">
            AI-Powered Video Editing
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Remove bad takes.
            <br />
            <span className="text-brand">Add subtitles.</span>
            <br />
            Done.
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Upload your video and let AI remove silences, mistakes, and awkward pauses.
            Clean subtitles added automatically. No timeline. No manual cuts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apps.apple.com/us/app/creator-ai/id6757284712"
               className="bg-brand hover:bg-brand-light text-white font-semibold px-8 py-4 rounded-full text-lg transition shadow-lg shadow-brand/25">
              Download for iOS
            </a>
            <a href="#how-it-works"
               className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full text-lg transition">
              See How It Works
            </a>
          </div>
          <p className="mt-6 text-sm text-white/40">Free to try · No credit card required</p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How It <span className="text-brand">Works</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Upload', desc: 'Drop your video into the app. Any format, any length.' },
            { step: '02', title: 'AI Cleanup', desc: 'AI detects and removes bad takes, silences, and mistakes automatically.' },
            { step: '03', title: 'Subtitles', desc: 'Clean, readable subtitles are generated and synced to your video.' },
            { step: '04', title: 'Export', desc: 'Download your polished video and post it anywhere.' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="text-brand text-4xl font-bold mb-3">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Built for <span className="text-brand">Creators</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '✂️', title: 'Auto-Cut Bad Takes', desc: 'AI identifies mistakes, long pauses, and filler words — then removes them seamlessly.' },
              { icon: '💬', title: 'Smart Subtitles', desc: 'Accurate captions generated in seconds. Styled and synced perfectly to your speech.' },
              { icon: '⚡', title: 'No Timeline Needed', desc: 'Skip the complex editing software. Upload, process, export. That\'s it.' },
              { icon: '🎬', title: 'Any Content Type', desc: 'Podcasts, talking heads, tutorials, vlogs — works with any speaking-based video.' },
              { icon: '📱', title: 'Mobile-First', desc: 'Edit on the go. Designed for iPhone and iPad with a clean, intuitive interface.' },
              { icon: '🚀', title: 'Export Anywhere', desc: 'Save to camera roll or share directly to YouTube, TikTok, Instagram, and more.' },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Simple <span className="text-brand">Pricing</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <div className="text-4xl font-bold mb-4">$0</div>
            <ul className="text-white/50 text-sm space-y-2 mb-6">
              <li>1 free take removal</li>
              <li>3-day trial of all features</li>
              <li>Subtitle generation</li>
            </ul>
            <a href="https://apps.apple.com/us/app/creator-ai/id6757284712"
               className="block border border-white/20 hover:border-white/40 font-medium px-6 py-3 rounded-full transition">
              Try Free
            </a>
          </div>
          <div className="p-8 rounded-2xl bg-brand/10 border border-brand/30 text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full">
              POPULAR
            </div>
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <div className="text-4xl font-bold mb-1">$9.99<span className="text-lg text-white/50">/mo</span></div>
            <p className="text-sm text-white/40 mb-4">or $99.99/year (save 17%)</p>
            <ul className="text-white/50 text-sm space-y-2 mb-6">
              <li>Unlimited take removal</li>
              <li>Unlimited subtitles</li>
              <li>Priority processing</li>
            </ul>
            <a href="https://apps.apple.com/us/app/creator-ai/id6757284712"
               className="block bg-brand hover:bg-brand-light font-medium px-6 py-3 rounded-full transition">
              Get Pro
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to create <span className="text-brand">faster</span>?
        </h2>
        <p className="text-lg text-white/50 mb-8">
          Join thousands of creators who save hours on every video.
        </p>
        <a href="https://apps.apple.com/us/app/creator-ai/id6757284712"
           className="inline-block bg-brand hover:bg-brand-light text-white font-semibold px-8 py-4 rounded-full text-lg transition shadow-lg shadow-brand/25">
          Download Creator AI
        </a>
      </section>
    </>
  )
}
