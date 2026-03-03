'use client'

import { useRouter, useSearchParams } from 'next/navigation'

const LANGUAGES = [
  { code: 'en', flag: '🇺🇸', name: 'EN' },
  { code: 'ru', flag: '🇷🇺', name: 'RU' },
  { code: 'es', flag: '🇪🇸', name: 'ES' },
  { code: 'fr', flag: '🇫🇷', name: 'FR' },
  { code: 'de', flag: '🇩🇪', name: 'DE' },
  { code: 'pt', flag: '🇧🇷', name: 'PT' },
  { code: 'tr', flag: '🇹🇷', name: 'TR' },
  { code: 'ar', flag: '🇸🇦', name: 'AR' },
  { code: 'he', flag: '🇮🇱', name: 'HE' },
]

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter()

  return (
    <div className="flex flex-wrap gap-1.5">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => router.push(`/blog?lang=${lang.code}`)}
          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
            currentLang === lang.code
              ? 'bg-brand text-white'
              : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80'
          }`}
        >
          {lang.flag} {lang.name}
        </button>
      ))}
    </div>
  )
}
