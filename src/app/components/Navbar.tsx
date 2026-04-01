'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const destinations_nav = [
  { name: 'Đà Nẵng', href: '/da-nang/' },
  { name: 'Hội An', href: '/hoi-an/' },
  { name: 'Huế', href: '/hue/' },
  { name: 'Phú Quốc', href: '/phu-quoc/' },
]

export const Logo = ({ dark }: { dark?: boolean }) => (
  <div className="flex items-center gap-2 cursor-pointer">
    <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 12l3 3v7h5v-5h4v5h5v-7l3-3L12 2zm0 2.8l7 7V20h-1v-5H6v5H5v-8.2l7-7z" />
    </svg>
    <span className={`font-bold text-2xl tracking-tight ${dark ? 'text-gray-900' : ''}`}>
      Visit Vietnam
    </span>
  </div>
)

export const Navbar = ({ variant = 'dark' }: { variant?: 'dark' | 'light' }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [destOpen, setDestOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isLight = variant === 'light'

  useEffect(() => {
    if (!isLight) return
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLight])

  const inactiveColor = isLight ? 'text-gray-600' : ''
  const linkClass = (href: string) =>
    `hover:text-orange-500 transition-colors ${
      pathname === href || pathname.startsWith(href + '/')
        ? 'text-orange-500 font-semibold'
        : inactiveColor
    }`

  if (isLight) {
    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-100'
            : 'bg-white/90 backdrop-blur-md border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/">
              <Logo dark />
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
              <a href="/" className={linkClass('/')}>
                Trang chủ
              </a>

              <div className="relative group">
                <button
                  className={`flex items-center gap-1 hover:text-orange-500 transition-colors ${inactiveColor}`}
                >
                  Điểm đến
                  <svg
                    className="w-3.5 h-3.5 mt-0.5 group-hover:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-xl py-2 min-w-[160px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                  {destinations_nav.map((dest) => (
                    <a
                      key={dest.href}
                      href={dest.href}
                      className="block px-5 py-2.5 text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors text-sm font-medium"
                    >
                      {dest.name}
                    </a>
                  ))}
                </div>
              </div>

              <a href="/for-business/" className={linkClass('/for-business')}>
                Doanh nghiệp
              </a>
              <a href="/newsroom/" className={linkClass('/newsroom')}>
                Tin tức
              </a>
              <a href="/about/" className={linkClass('/about')}>
                Giới thiệu
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/app/"
                className="hidden lg:block bg-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm"
              >
                Tải app miễn phí
              </a>
              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors gap-1.5"
                aria-label="Menu"
              >
                <span
                  className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
                />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-100 pt-4">
              <div className="flex flex-col gap-1">
                <a
                  href="/"
                  className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Trang chủ
                </a>
                <div>
                  <button
                    onClick={() => setDestOpen(!destOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                  >
                    Điểm đến
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${destOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {destOpen && (
                    <div className="ml-4 flex flex-col gap-0.5">
                      {destinations_nav.map((dest) => (
                        <a
                          key={dest.href}
                          href={dest.href}
                          className="px-4 py-2.5 rounded-xl text-gray-500 hover:text-orange-500 hover:bg-orange-50 transition-colors text-sm font-medium"
                          onClick={() => setMobileOpen(false)}
                        >
                          {dest.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <a
                  href="/for-business/"
                  className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Doanh nghiệp
                </a>
                <a
                  href="/newsroom/"
                  className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Tin tức
                </a>
                <a
                  href="/about/"
                  className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Giới thiệu
                </a>
                <div className="mt-2 pt-3 border-t border-gray-100">
                  <a
                    href="/app/"
                    className="block text-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Tải app miễn phí
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    )
  }

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-8 py-5 md:py-6 text-white w-full max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center">
        <a href="/">
          <Logo />
        </a>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
          <a href="/" className={linkClass('/')}>
            Trang chủ
          </a>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-orange-500 transition-colors">
              Điểm đến
              <svg
                className="w-3.5 h-3.5 mt-0.5 group-hover:rotate-180 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-xl py-2 min-w-[160px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
              {destinations_nav.map((dest) => (
                <a
                  key={dest.href}
                  href={dest.href}
                  className="block px-5 py-2.5 text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors text-sm font-medium"
                >
                  {dest.name}
                </a>
              ))}
            </div>
          </div>

          <a href="/for-business/" className={linkClass('/for-business')}>
            Doanh nghiệp
          </a>
          <a href="/newsroom/" className={linkClass('/newsroom')}>
            Tin tức
          </a>
          <a href="/about/" className={linkClass('/about')}>
            Giới thiệu
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/app/"
            className="hidden lg:block bg-white text-navy px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Tải app miễn phí
          </a>
          {/* Hamburger (mobile & tablet) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors gap-1.5"
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-4 rounded-2xl overflow-hidden shadow-2xl bg-navy-glass">
          <div className="p-4 flex flex-col gap-1">
            <a
              href="/"
              className="px-4 py-3 rounded-xl hover:bg-white/10 transition-colors font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Trang chủ
            </a>

            <div>
              <button
                onClick={() => setDestOpen(!destOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 transition-colors font-medium"
              >
                Điểm đến
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${destOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {destOpen && (
                <div className="ml-4 mb-1 flex flex-col gap-0.5">
                  {destinations_nav.map((dest) => (
                    <a
                      key={dest.href}
                      href={dest.href}
                      className="px-4 py-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {dest.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/for-business/"
              className="px-4 py-3 rounded-xl hover:bg-white/10 transition-colors font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Doanh nghiệp
            </a>
            <a
              href="/newsroom/"
              className="px-4 py-3 rounded-xl hover:bg-white/10 transition-colors font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Tin tức
            </a>
            <a
              href="/about/"
              className="px-4 py-3 rounded-xl hover:bg-white/10 transition-colors font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Giới thiệu
            </a>

            <div className="mt-2 pt-3 border-t border-white/10">
              <a
                href="/app/"
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Tải app miễn phí
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
