'use client'

import { useState, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'

// ─── Constants ────────────────────────────────────────────────────────────────

const ITEM_COUNT = 3
const TYPE_SPEED = 42      // ms per char — typing
const DELETE_SPEED = 30    // ms per char — deleting
const PAUSE_AFTER_TYPE = 3000  // ms — hold after fully typed
const PAUSE_AFTER_DELETE = 280 // ms — wait before next item
const CURSOR_BLINK = 530   // ms — cursor blink interval

type Phase = 'typing' | 'pausing' | 'deleting' | 'waiting'

// ─── Component ────────────────────────────────────────────────────────────────

export function HeroCardStack() {
  const t = useTranslations('HeroCardStack')

  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [phase, setPhase] = useState<Phase>('typing')
  const [cursorVisible, setCursorVisible] = useState(true)
  const [paused, setPaused] = useState(false)
  const pausedRef = useRef(paused)
  useEffect(() => { pausedRef.current = paused }, [paused])

  // Cursor blink — independent of typewriter
  useEffect(() => {
    const id = setInterval(() => setCursorVisible(v => !v), CURSOR_BLINK)
    return () => clearInterval(id)
  }, [])

  // Typewriter state machine
  useEffect(() => {
    if (paused) return

    const fullText = t(`items.${index}.title`)

    if (phase === 'typing') {
      if (displayText.length < fullText.length) {
        const id = setTimeout(
          () => setDisplayText(fullText.slice(0, displayText.length + 1)),
          TYPE_SPEED,
        )
        return () => clearTimeout(id)
      }
      setPhase('pausing')
      return
    }

    if (phase === 'pausing') {
      const id = setTimeout(() => setPhase('deleting'), PAUSE_AFTER_TYPE)
      return () => clearTimeout(id)
    }

    if (phase === 'deleting') {
      if (displayText.length > 0) {
        const id = setTimeout(
          () => setDisplayText(prev => prev.slice(0, -1)),
          DELETE_SPEED,
        )
        return () => clearTimeout(id)
      }
      setPhase('waiting')
      return
    }

    if (phase === 'waiting') {
      const id = setTimeout(() => {
        setIndex(i => (i + 1) % ITEM_COUNT)
        setPhase('typing')
      }, PAUSE_AFTER_DELETE)
      return () => clearTimeout(id)
    }
  }, [phase, displayText, index, paused, t])

  return (
    <>
    <style>{`
      @property --btn-angle {
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
      }
      @keyframes btn-spin {
        to { --btn-angle: 360deg; }
      }
      .btn-gradient-spin {
        --btn-angle: 0deg;
        animation: btn-spin 3s linear infinite;
        background: conic-gradient(from var(--btn-angle), #c084fc, #818cf8, #60a5fa, #c084fc) !important;
      }
    `}</style>
    <Link
      href="/tai-app"
      className="block w-full max-w-[390px] rounded-[24px] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] focus-visible:ring-offset-2"
      aria-label={t('ariaLabel')}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex flex-row items-center h-[140px] gap-1 px-5 border rounded-[24px] overflow-hidden backdrop-blur-md"
        style={{
          background: 'rgba(255,255,255,0.3)',
          borderColor: 'rgba(255,255,255,0.5)',
          boxShadow: '0px 8px 16px rgba(0,0,0,0.1), 0px 0px 4px rgba(0,0,0,0.06)',
        }}
      >
        {/* ── Typewriter content ── */}
        <div className="flex flex-1 flex-col justify-center gap-4 py-5 min-w-0 overflow-hidden">
          <p
            className="font-default text-white text-left"
            style={{
              fontSize: 18,
              fontWeight: 500,
              lineHeight: '24px',
              letterSpacing: '-0.36px',
              minHeight: 48,
            }}
          >
            {displayText}
            <span
              aria-hidden
              style={{ opacity: cursorVisible ? 1 : 0, marginLeft: 1 }}
            >
              |
            </span>
          </p>

          {/* White pill CTA with GIF on left — full width, animated gradient border */}
          <div
            className="rounded-full w-full p-[1.5px] btn-gradient-spin"
            style={{
              boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
            }}
          >
          <div
            className="flex items-center justify-center gap-2 rounded-full w-full"
            style={{
              background: '#ffffff',
              padding: '6px 14px 6px 6px',
            }}
          >
            <div className="relative size-7 rounded-full overflow-hidden shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-cards/app-download.gif"
                alt=""
                aria-hidden
                className="absolute object-cover w-full h-full"
                draggable={false}
              />
            </div>
            <span
              className="font-default overflow-hidden text-ellipsis whitespace-nowrap"
              style={{
                color: 'var(--color-text-default)',
                fontSize: 14,
                fontWeight: 500,
                lineHeight: '20px',
                letterSpacing: '-0.14px',
              }}
            >
              {t(`items.${index}.cta`)}
            </span>
          </div>
          </div>
        </div>
      </div>
    </Link>
    </>
  )
}
