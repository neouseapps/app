'use client'

import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { VsvnLogo } from './VsvnLogo'
import { Button } from '@/app/components/ui/button'
import { LanguageSwitcher } from './LanguageSwitcher'

export const Navbar = ({ variant = 'dark', cta }: { variant?: 'dark' | 'light'; cta?: { label: string; onClick: () => void } }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslations('Nav')

  const isLight = variant === 'light'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const inactiveColor = isLight ? 'text-[var(--color-text-dim)]' : ''
  const linkClass = () => `hover:text-[var(--color-brand-primary)] transition-colors ${inactiveColor}`

  if (isLight) {
    return (
      <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-[var(--color-border-default)]'
            : 'bg-white/90 backdrop-blur-md border-[var(--color-border-default)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[60px]">
            <Link href="/">
              <VsvnLogo variant="color-light" className="w-32" />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
              <Link href="/" className={linkClass()}>{t('home')}</Link>
              <Link href="/for-business" className={linkClass()}>{t('business')}</Link>
              <Link href="/for-governance" className={linkClass()}>{t('governance')}</Link>
              <Link href="/newsroom" className={linkClass()}>{t('newsroom')}</Link>
              <Link href="/about" className={linkClass()}>{t('about')}</Link>
            </div>

            <div className="flex items-center gap-3">
              <LanguageSwitcher variant="light" />
              {cta ? (
                <Button variant="primary" size="md" className="hidden lg:block" onClick={cta.onClick}>
                  {cta.label}
                </Button>
              ) : (
                <Button asChild variant="primary" size="md" className="hidden lg:block">
                  <Link href="/tai-app">{t('downloadApp')}</Link>
                </Button>
              )}
              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-[var(--color-bg-dim)] transition-colors gap-1.5"
                aria-label="Menu"
              >
                <span className={`block w-5 h-0.5 bg-[var(--color-text-default)] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-5 h-0.5 bg-[var(--color-text-default)] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-[var(--color-text-default)] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>

        </div>
      </nav>

      {/* Mobile menu — slide-down overlay */}
      <div className={`lg:hidden fixed top-[60px] inset-x-0 bottom-0 z-[60] bg-white flex flex-col overflow-y-auto transition-all duration-300 ease-out ${
        mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
      }`}>
        <div className="p-6 flex flex-col gap-1 flex-1">
          <Link href="/" className="px-4 py-3 rounded-xl text-[var(--color-text-default)] hover:bg-[var(--color-bg-dim)] transition-colors font-medium" onClick={() => setMobileOpen(false)}>{t('home')}</Link>
          <Link href="/for-business" className="px-4 py-3 rounded-xl text-[var(--color-text-default)] hover:bg-[var(--color-bg-dim)] transition-colors font-medium" onClick={() => setMobileOpen(false)}>{t('business')}</Link>
          <Link href="/for-governance" className="px-4 py-3 rounded-xl text-[var(--color-text-default)] hover:bg-[var(--color-bg-dim)] transition-colors font-medium" onClick={() => setMobileOpen(false)}>{t('governance')}</Link>
          <Link href="/newsroom" className="px-4 py-3 rounded-xl text-[var(--color-text-default)] hover:bg-[var(--color-bg-dim)] transition-colors font-medium" onClick={() => setMobileOpen(false)}>{t('newsroom')}</Link>
          <Link href="/about" className="px-4 py-3 rounded-xl text-[var(--color-text-default)] hover:bg-[var(--color-bg-dim)] transition-colors font-medium" onClick={() => setMobileOpen(false)}>{t('about')}</Link>
          <div className="mt-auto pt-3 flex flex-col gap-3">
            <LanguageSwitcher variant="light" className="" fullWidth />
            {cta ? (
              <Button variant="primary" size="md" className="w-full" onClick={() => { cta.onClick(); setMobileOpen(false) }}>
                {cta.label}
              </Button>
            ) : (
              <Button asChild variant="primary" size="md" className="w-full" onClick={() => setMobileOpen(false)}>
                <Link href="/tai-app">{t('downloadApp')}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
      </>
    )
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full h-[60px] transition-all duration-300 ${
      scrolled
        ? 'bg-[var(--color-bg-inverse)] shadow-md'
        : '[background:var(--Navigation-VSVN-Background)]'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 text-white h-full">
        <div className="flex justify-between items-center h-full">
          <Link href="/">
            <VsvnLogo variant="color-dark" className="w-32" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
            <Link href="/" className={linkClass()}>{t('home')}</Link>
            <Link href="/for-business" className={linkClass()}>{t('business')}</Link>
            <Link href="/for-governance" className={linkClass()}>{t('governance')}</Link>
            <Link href="/newsroom" className={linkClass()}>{t('newsroom')}</Link>
            <Link href="/about" className={linkClass()}>{t('about')}</Link>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher variant="dark" />
            <Button asChild variant="tertiary" size="md" className="hidden lg:block">
              <Link href="/tai-app">{t('downloadAppDark')}</Link>
            </Button>
            {/* Hamburger (mobile & tablet) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors gap-1.5"
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile menu — slide-down overlay */}
        <div className={`lg:hidden fixed top-[60px] inset-x-0 bottom-0 z-[60] bg-[var(--color-bg-inverse)] flex flex-col overflow-y-auto transition-all duration-300 ease-out ${
          mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}>
          <div className="p-6 flex flex-col gap-1 flex-1">
            <Link href="/" className="px-4 py-3 rounded-xl hover:bg-white/10 transition-colors font-medium" onClick={() => setMobileOpen(false)}>{t('home')}</Link>
            <Link href="/for-business" className="px-4 py-3 rounded-xl hover:bg-white/10 transition-colors font-medium" onClick={() => setMobileOpen(false)}>{t('business')}</Link>
            <Link href="/for-governance" className="px-4 py-3 rounded-xl hover:bg-white/10 transition-colors font-medium" onClick={() => setMobileOpen(false)}>{t('governance')}</Link>
            <Link href="/newsroom" className="px-4 py-3 rounded-xl hover:bg-white/10 transition-colors font-medium" onClick={() => setMobileOpen(false)}>{t('newsroom')}</Link>
            <Link href="/about" className="px-4 py-3 rounded-xl hover:bg-white/10 transition-colors font-medium" onClick={() => setMobileOpen(false)}>{t('about')}</Link>
            <div className="mt-2 pt-3 flex flex-col gap-3">
              <LanguageSwitcher variant="dark" className="" fullWidth />
              <Button asChild variant="tertiary" size="md" className="w-full" onClick={() => setMobileOpen(false)}>
                <Link href="/tai-app">{t('downloadAppDark')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
