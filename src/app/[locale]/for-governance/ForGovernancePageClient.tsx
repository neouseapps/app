'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/ui/button'
import {
  ShieldCheck,
  Database,
  Clock,
  EyeOff,
  BarChart3,
  Map,
  PieChart,
  BrainCircuit,
  FileCheck,
  Target,
  FileOutput,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
} from 'lucide-react'

// ---------------------------------------------------------------------------
// Integer counter hook
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Smooth scroll helper (matches ForBusiness)
// ---------------------------------------------------------------------------
function smoothScrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top: y, behavior: 'smooth' })
}

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------
function HeroSection() {
  const t = useTranslations('ForGovernancePage.Hero')
  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden bg-[var(--color-bg-inverse)]">
      {/* Background image */}
      <Image
        src="/images/hero-for-governance.png"
        alt="For Government"
        fill
        className="object-cover object-center"
        priority
        unoptimized
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-8 mt-16">
        <div className="max-w-[832px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white/90 text-sm font-medium mb-6 bg-white/10 backdrop-blur-md border border-white/20">
            <ShieldCheck className="w-4 h-4 text-[var(--color-brand-primary)]" />
            {t('badge')}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-[1.2] mb-6">
            {t('title')}
          </h1>
          <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="flex flex-col gap-4 items-center w-64 mx-auto">
            <Button variant="ghost" size="lg" className="w-full text-white border-white/30 hover:bg-white/10" onClick={() => smoothScrollTo('features')}>
              {t('ctaSecondary')}
            </Button>
            <Button variant="brand" size="lg" className="w-full" onClick={() => smoothScrollTo('contact')}>
              {t('ctaPrimary')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Pain Points Section
// ---------------------------------------------------------------------------
function PainPointsSection() {
  const t = useTranslations('ForGovernancePage.PainPoints')
  const items = [
    { icon: Database },
    { icon: Clock },
    { icon: EyeOff },
  ].map((item, i) => ({
    ...item,
    title: t(`items.${i}.title`),
    desc: t(`items.${i}.desc`),
  }))

  return (
    <section className="py-24 bg-[var(--color-bg-dim)]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[var(--color-brand-primary)] tracking-wider uppercase mb-2">
            {t('eyebrow')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-[var(--color-text-default)] leading-[1.3] mb-4">
            {t('title')}
          </h3>
          <p className="text-[var(--color-text-dim)] text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white p-4 rounded-[16px] shadow-md max-w-[320px] mx-auto w-full"
            >
              <div className="w-10 h-10 flex items-center justify-center text-[var(--color-text-dim)] mb-3">
                <Icon className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-default font-bold text-[var(--color-text-default)] mb-3">{title}</h4>
              <p className="text-[var(--color-text-dim)] leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Dashboard Features Section
// ---------------------------------------------------------------------------
function DashboardFeaturesSection() {
  const t = useTranslations('ForGovernancePage.DashboardFeatures')
  const features = [
    { icon: BarChart3 },
    { icon: Map },
    { icon: PieChart },
    { icon: BrainCircuit },
  ].map((item, i) => ({
    ...item,
    title: t(`items.${i}.title`),
    desc: t(`items.${i}.desc`),
  }))

  return (
    <section id="features" className="py-24 bg-[var(--color-bg-default)]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text content */}
          <div className="flex flex-col">
            <h2 className="text-sm font-bold text-[var(--color-brand-primary)] tracking-wider uppercase mb-4">
              {t('eyebrow')}
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-[var(--color-text-default)] leading-[1.3] mb-4">
              {t('title')}
            </h3>
            <p className="text-[var(--color-text-dim)] text-lg leading-relaxed mb-8">
              {t('subtitle')}
            </p>
            <Button variant="brand" size="lg" className="w-fit" onClick={() => smoothScrollTo('contact')}>
              {t('cta')}
            </Button>
          </div>

          {/* Right: 2x2 card grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-4 rounded-[16px] shadow-md text-center"
              >
                <div className="w-10 h-10 flex items-center justify-center text-[var(--color-brand-primary)] mb-3 mx-auto">
                  <Icon className="w-10 h-10" />
                </div>
                <h4 className="text-base font-default font-bold text-[var(--color-text-default)] mb-2">{title}</h4>
                <p className="text-[var(--color-text-dim)] leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// National Sponsorship Section
// ---------------------------------------------------------------------------
function NationalSponsorshipSection() {
  const t = useTranslations('ForGovernancePage.NationalSponsorship')
  const cards = [
    { src: '/images/governance/timeless-charm.png', label: t('cards.0.label') },
    { src: '/images/governance/hiep-hoi.png', label: t('cards.1.label') },
  ]
  return (
    <section
      className="py-16 relative"
      style={{ background: 'linear-gradient(180deg, var(--color-alpha-black-20) 0%, var(--color-alpha-black-80) 100%), var(--color-bg-brand-primary-dim)' }}
    >
      <div className="max-w-[1440px] mx-auto px-8 text-center">
        <h3
          className="text-3xl md:text-4xl font-display font-medium leading-[1.3] mb-12"
          style={{ background: 'linear-gradient(77deg, #FFDDB7 1%, #FFF7EE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
        >
          {t('title')}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto">
          {cards.map(({ src, label }) => (
            <div key={label} className="flex flex-col items-center gap-4">
              <div className="rounded-[24px] p-8" style={{ backgroundColor: 'color-mix(in srgb, var(--color-brand-primary) 10%, transparent)' }}>
                <div className="relative w-24 h-24">
                  <Image src={src} alt={label} fill className="object-contain" unoptimized />
                </div>
              </div>
              <p className="text-white/90 text-[20px] font-medium text-center leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Value Props Section
// ---------------------------------------------------------------------------
function ValuePropsSection() {
  const t = useTranslations('ForGovernancePage.ValueProps')
  const items = [
    { icon: FileCheck },
    { icon: Target },
    { icon: FileOutput },
  ].map((item, i) => ({
    ...item,
    title: t(`items.${i}.title`),
    desc: t(`items.${i}.desc`),
  }))

  return (
    <section className="py-16 bg-[var(--color-bg-inverse)] text-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center max-w-[704px] mx-auto mb-12">
          <h2 className="text-sm font-bold text-[var(--color-brand-primary)] tracking-wider uppercase mb-2">
            {t('eyebrow')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-white leading-[1.3] mb-4">
            {t('title')}
          </h3>
          <p className="text-white/70 text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <Icon className="w-12 h-12 text-white/80" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
              <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Contact Form Section
// ---------------------------------------------------------------------------
const inputClass =
  'w-full rounded-xl border border-[var(--color-border-default)] bg-white px-4 py-3 text-sm text-[var(--color-text-default)] placeholder:text-[var(--color-text-dim-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] transition'

function ContactFormSection() {
  const t = useTranslations('ForGovernancePage.Contact')
  const [form, setForm] = useState({ organization: '', position: '', name: '', email: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const isValid = Object.values(form).every((v) => v.trim() !== '')

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!isValid) return
      setIsSubmitting(true)
      await new Promise((res) => setTimeout(res, 1200))
      setIsSubmitting(false)
      setIsSubmitted(true)
    },
    [isValid],
  )

  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-dim)]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[var(--color-brand-primary)] tracking-wider uppercase mb-2">
            {t('eyebrow')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-[var(--color-text-default)] leading-[1.3] mb-4">
            {t('title')}
          </h3>
          <p className="text-[var(--color-text-dim)] text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-[620px] mx-auto flex flex-col gap-12">
          {/* Form */}
          <div className="bg-white rounded-[24px] p-8 shadow-md">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-[var(--color-text-default)] mb-2">{t('successTitle')}</h4>
                <p className="text-[var(--color-text-dim)] text-sm leading-relaxed max-w-xs">{t('successDesc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-default)] mb-1.5">
                    {t('fields.organization')}
                  </label>
                  <input
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder={t('placeholders.organization')}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-default)] mb-1.5">
                    {t('fields.position')}
                  </label>
                  <input
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    placeholder={t('placeholders.position')}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-default)] mb-1.5">
                    {t('fields.name')}
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t('placeholders.name')}
                    className={inputClass}
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-default)] mb-1.5">
                      {t('fields.email')}
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t('placeholders.email')}
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-default)] mb-1.5">
                      {t('fields.phone')}
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t('placeholders.phone')}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="brand"
                    size="lg"
                    className="w-full"
                    disabled={!isValid || isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        {t('submit')}
                      </span>
                    ) : (
                      t('submit')
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="bg-white rounded-[24px] p-8">
            <div>
              <h4 className="text-xl font-bold mb-6 text-[var(--color-text-default)]">{t('infoTitle')}</h4>
              <div className="space-y-5 flex flex-col items-start">
                <a
                  href={`mailto:${t('email')}`}
                  className="flex items-center gap-3 text-[var(--color-text-dim)] hover:text-[var(--color-text-default)] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-black/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-medium">{t('email')}</p>
                </a>
                <div className="flex items-center gap-3 text-[var(--color-text-dim)]">
                  <div className="w-9 h-9 rounded-xl bg-black/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-medium">{t('phone')}</p>
                </div>
                <div className="flex items-center gap-3 text-[var(--color-text-dim)]">
                  <div className="w-9 h-9 rounded-xl bg-black/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t('address')}</p>
                    <p className="text-xs text-[var(--color-text-dim-variant)] mt-1">{t('hours')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function ForGovernancePageClient() {
  const tHero = useTranslations('ForGovernancePage.Hero')
  return (
    <div className="font-default text-[var(--color-text-default)] antialiased bg-white scroll-smooth">
      <Navbar variant="light" cta={{ label: tHero('navCta'), onClick: () => smoothScrollTo('contact') }} />
      <main>
        <HeroSection />
        <PainPointsSection />
        <DashboardFeaturesSection />
        <NationalSponsorshipSection />
        <ValuePropsSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  )
}
