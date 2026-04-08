'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { QrCode } from 'lucide-react'
import { useTranslations } from 'next-intl'

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
      <path d="M3.18 23.76c.3.17.63.24.96.2l13.5-11.93-2.86-2.85L3.18 23.76zM.64 1.28C.24 1.71 0 2.35 0 3.18v17.64c0 .83.24 1.47.64 1.9l.1.1 9.88-9.88v-.23L.74 1.18l-.1.1zM20.77 10.56l-2.8-1.61-3.18 3.05 3.18 3.05 2.82-1.63c.8-.46.8-1.4-.02-1.86zM4.14.24l13.5 11.93-2.86 2.85L4.14.24z" />
    </svg>
  )
}

export function AppHero() {
  const t = useTranslations('TaiAppPage.Hero')
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--color-bg-dim)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--color-text-default)] mb-6 leading-tight">
              {t('titleMain')}{' '}
              <br className="hidden lg:block" />
              <span className="text-[var(--color-text-success-default)]">{t('titleHighlight')}</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-dim)] mb-10 max-w-2xl mx-auto lg:mx-0">
              {t('subtitle')}
            </p>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <button className="flex items-center justify-center gap-3 bg-[var(--color-bg-inverse)] text-[var(--color-text-bright)] px-6 py-3.5 rounded-xl hover:bg-[var(--color-bg-inverse-hover)] transition-colors w-full sm:w-auto">
                <AppleIcon />
                <div className="text-left">
                  <div className="text-[10px] leading-none mb-1 opacity-70">{t('downloadOnAppStore')}</div>
                  <div className="text-sm font-semibold leading-none">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-3 bg-[var(--color-bg-success-default)] text-[var(--color-text-bright)] px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity w-full sm:w-auto">
                <GooglePlayIcon />
                <div className="text-left">
                  <div className="text-[10px] leading-none mb-1 opacity-70">{t('downloadOnGooglePlay')}</div>
                  <div className="text-sm font-semibold leading-none">Google Play</div>
                </div>
              </button>
            </div>

            {/* QR hint */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-[var(--color-text-dim)]">
              <div className="p-2 bg-[var(--color-bg-default)] rounded-lg shadow-sm border border-[var(--color-bg-dim)]">
                <QrCode className="w-12 h-12 text-[var(--color-text-default)]" />
              </div>
              <div>
                <p className="font-medium text-[var(--color-text-default)]">{t('scanToDownload')}</p>
                <p>iOS & Android</p>
              </div>
            </div>
          </motion.div>

          {/* Right — app mockup image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none flex justify-center"
          >
            <Image
              src="/images/hero-app-mockup.png"
              alt="Visit Vietnam app — màn hình khám phá điểm đến"
              width={560}
              height={600}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
