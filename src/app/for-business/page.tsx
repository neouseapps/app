'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Navbar } from '../components/Navbar'
import {
  Rocket,
  ArrowRight,
  PlayCircle,
  Globe,
  LayoutDashboard,
  TrendingUp,
  CreditCard,
  Building2,
  Map,
  UtensilsCrossed,
  CheckCircle,
  Check,
  X,
  Quote,
  ChevronDown,
  LayoutGrid,
  Calendar,
  Users,
  BarChart2,
  ShoppingCart,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'

// Inline SVGs for branded social icons not in lucide-react@1.7
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
)

// ---------------------------------------------------------------------------
// Counter hook
// ---------------------------------------------------------------------------
function useCounterOnVisible(target: number) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let frame: number
    const duration = 1200
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, target])

  return { count, ref }
}

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------
function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-orange-50 opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-blue-50 opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left column */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold mb-6 border border-orange-100">
              <Rocket className="w-4 h-4" />
              Giải pháp B2B hàng đầu
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.15] mb-6">
              Đưa dịch vụ của bạn đến{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                triệu du khách
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Nền tảng quản lý và phân phối dịch vụ du lịch toàn diện. Tăng trưởng doanh thu, tối ưu
              vận hành và tiếp cận khách hàng toàn cầu một cách dễ dàng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="px-8 py-4 bg-orange-600 text-white font-medium rounded-xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-200 text-center flex items-center justify-center gap-2 group"
              >
                Đăng ký đối tác
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="px-8 py-4 bg-white text-gray-700 font-medium rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all text-center flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Xem demo
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">
                  A
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">
                  M
                </div>
                <div className="w-8 h-8 rounded-full bg-green-200 border-2 border-white flex items-center justify-center text-xs font-bold text-green-600">
                  H
                </div>
              </div>
              <p>
                Tham gia cùng <span className="font-semibold text-gray-900">5,000+</span> đối tác
                khác
              </p>
            </div>
          </div>

          {/* Right column – dashboard mockup */}
          <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-2xl bg-gray-50 border border-gray-200 shadow-2xl overflow-hidden group">
            {/* Browser chrome */}
            <div className="h-10 border-b border-gray-200 bg-gray-100 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 bg-white h-6 rounded-md border border-gray-200" />
            </div>

            <div className="flex h-[calc(100%-2.5rem)]">
              {/* Sidebar */}
              <div className="w-48 border-r border-gray-200 bg-white p-4 hidden sm:block">
                <div className="w-24 h-4 bg-gray-200 rounded mb-8" />
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-orange-600">
                    <LayoutGrid className="w-4 h-4" />
                    <div className="w-20 h-3 bg-orange-100 rounded" />
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <div className="w-16 h-3 bg-gray-200 rounded" />
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="w-4 h-4" />
                    <div className="w-24 h-3 bg-gray-200 rounded" />
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <BarChart2 className="w-4 h-4" />
                    <div className="w-16 h-3 bg-gray-200 rounded" />
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 bg-gray-50 p-4 sm:p-6 overflow-hidden relative">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-32 h-6 bg-gray-200 rounded" />
                  <div className="w-24 h-8 bg-orange-100 rounded-lg" />
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-green-100 mb-2 flex items-center justify-center text-green-600">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="w-20 h-5 bg-gray-200 rounded mb-2" />
                    <div className="w-12 h-8 bg-gray-800 rounded" />
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-blue-100 mb-2 flex items-center justify-center text-blue-600">
                      <ShoppingCart className="w-4 h-4" />
                    </div>
                    <div className="w-24 h-5 bg-gray-200 rounded mb-2" />
                    <div className="w-16 h-8 bg-gray-800 rounded" />
                  </div>
                </div>

                {/* Chart */}
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm h-48 relative">
                  <div className="w-24 h-4 bg-gray-200 rounded mb-4" />
                  <svg
                    className="w-full h-full absolute bottom-0 left-0 px-4 pb-4"
                    viewBox="0 0 400 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,100 L0,80 C50,80 100,20 150,40 C200,60 250,10 300,30 C350,50 400,10 400,10 L400,100 Z"
                      fill="rgba(234,88,12,0.08)"
                    />
                    <path
                      d="M0,80 C50,80 100,20 150,40 C200,60 250,10 300,30 C350,50 400,10 400,10"
                      fill="none"
                      stroke="#EA580C"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="[stroke-dasharray:1000] [stroke-dashoffset:1000] animate-[dash_3s_ease-out_forwards]"
                    />
                  </svg>
                </div>

                {/* Floating notification */}
                <div className="absolute -right-4 -bottom-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-48 transform -rotate-3 transition-transform group-hover:rotate-0 duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs font-semibold text-gray-600">Booking mới</span>
                  </div>
                  <div className="font-bold text-gray-900">+ 3,450,000đ</div>
                  <div className="text-xs text-gray-400">Vừa xong</div>
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
// Stats Section
// ---------------------------------------------------------------------------
function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useCounterOnVisible(target)
  const formatted = target >= 1000 ? count.toLocaleString('en-US') : count.toString()
  return (
    <div className="p-4 text-center">
      <div className="text-4xl md:text-5xl font-bold mb-2 flex justify-center items-baseline">
        <span ref={ref}>{formatted}</span>
        <span className="text-orange-300 ml-1">{suffix}</span>
      </div>
      <p className="text-orange-100 font-medium text-sm md:text-base">{label}</p>
    </div>
  )
}

function StatsSection() {
  return (
    <section className="py-16 bg-orange-600 text-white relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-orange-700/50">
          <StatCounter target={50000} suffix="+" label="Du khách hàng tháng" />
          <StatCounter target={120} suffix="+" label="Điểm đến phủ sóng" />
          <StatCounter target={34} suffix="%" label="Tỉ lệ chuyển đổi TB" />
          <StatCounter target={45} suffix="" label="Quốc gia nguồn khách" />
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Features Section
// ---------------------------------------------------------------------------
const features = [
  {
    icon: Globe,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    hoverBg: 'group-hover:bg-orange-600',
    title: 'Tiếp cận toàn cầu',
    desc: 'Kết nối dịch vụ của bạn với mạng lưới đại lý và hàng triệu du khách quốc tế đang tìm kiếm trải nghiệm tại Việt Nam.',
  },
  {
    icon: LayoutDashboard,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    hoverBg: 'group-hover:bg-blue-600',
    title: 'Quản lý tập trung',
    desc: 'Đồng bộ lịch, quản lý tình trạng phòng/chỗ, và xử lý đơn hàng trên một giao diện duy nhất, tránh overbooking.',
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    hoverBg: 'group-hover:bg-purple-600',
    title: 'Dữ liệu thông minh',
    desc: 'Báo cáo chi tiết về hành vi khách hàng, xu hướng đặt phòng và gợi ý điều chỉnh giá (Dynamic Pricing) theo thời gian thực.',
  },
  {
    icon: CreditCard,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    hoverBg: 'group-hover:bg-green-600',
    title: 'Thanh toán đơn giản',
    desc: 'Tích hợp cổng thanh toán quốc tế và nội địa, đối soát tự động, nhận tiền định kỳ nhanh chóng và minh bạch.',
  },
]

function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-orange-600 tracking-wider uppercase mb-2">
            Giá trị cốt lõi
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tại sao chọn chúng tôi
          </h3>
          <p className="text-gray-600 text-lg">
            Hệ sinh thái công cụ mạnh mẽ được thiết kế riêng để giải quyết các bài toán tăng trưởng
            và vận hành của doanh nghiệp du lịch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, iconBg, iconColor, hoverBg, title, desc }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.15)] transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
            >
              <div
                className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center ${iconColor} text-3xl mb-6 group-hover:scale-110 ${hoverBg} group-hover:text-white transition-all duration-300`}
              >
                <Icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Solutions Section
// ---------------------------------------------------------------------------
const solutions = [
  {
    icon: Building2,
    tag: 'Lưu trú',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Hotels & Homestay',
    items: [
      'Channel Manager: Đồng bộ đa kênh OTA',
      'PMS tích hợp quản lý buồng phòng',
      'Tự động hóa giá theo nhu cầu',
    ],
  },
  {
    icon: Map,
    tag: 'Trải nghiệm',
    image:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Tours & Hoạt động',
    items: [
      'Quản lý lịch trình và phân bổ Hướng dẫn viên',
      'Hệ thống booking theo khung giờ linh hoạt',
      'Tích hợp quét mã QR vé điện tử',
    ],
  },
  {
    icon: UtensilsCrossed,
    tag: 'F&B',
    image:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Restaurants & Ẩm thực',
    items: [
      'Nhận đặt bàn trước qua nền tảng OTA',
      'Giới thiệu Menu đa ngôn ngữ',
      'Upsell combo bữa ăn cho du khách',
    ],
  },
]

function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-orange-600 tracking-wider uppercase mb-2">
              Đo ni đóng giày
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Giải pháp cho từng ngành
            </h3>
            <p className="text-gray-600 text-lg">
              Chúng tôi hiểu mỗi lĩnh vực có đặc thù riêng. Công cụ được tùy biến để tối ưu hóa hiệu
              quả cho từng loại hình kinh doanh.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-orange-600 font-medium hover:text-orange-700 flex items-center gap-1 group"
            >
              Xem tất cả giải pháp{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map(({ icon: Icon, tag, image, title, items }) => (
            <div
              key={title}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col"
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold tracking-wide">{tag}</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{title}</h4>
                <ul className="space-y-3 mb-8 flex-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#register"
                  className="block w-full py-3 text-center border-2 border-orange-600 text-orange-600 font-medium rounded-xl hover:bg-orange-600 hover:text-white transition-colors"
                >
                  Bắt đầu ngay
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Pricing Section
// ---------------------------------------------------------------------------
function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-orange-600 tracking-wider uppercase mb-2">
            Đầu tư thông minh
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Chọn gói đối tác phù hợp
          </h3>
          <p className="text-gray-600 text-lg">
            Mô hình chi phí minh bạch. Không phí ẩn. Phát triển cùng doanh nghiệp của bạn.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Free */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Khởi đầu</h4>
            <p className="text-sm text-gray-500 mb-6 h-10">
              Phù hợp cho doanh nghiệp nhỏ muốn thử nghiệm.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">Miễn phí</span>
              <span className="text-gray-500">/duy trì</span>
            </div>
            <div className="text-sm font-medium text-orange-600 mb-6 bg-orange-50 inline-block px-3 py-1 rounded-full">
              Hoa hồng: 15% / giao dịch
            </div>
            <ul className="space-y-4 mb-8">
              {[
                { ok: true, text: 'Đăng tối đa 5 dịch vụ' },
                { ok: true, text: 'Quản lý booking cơ bản' },
                { ok: true, text: 'Thanh toán tiêu chuẩn (T+7)' },
                { ok: false, text: 'Không có Báo cáo chuyên sâu' },
                { ok: false, text: 'Hỗ trợ qua email' },
              ].map(({ ok, text }) => (
                <li
                  key={text}
                  className={`flex items-center gap-3 text-sm ${ok ? 'text-gray-600' : 'text-gray-400'}`}
                >
                  {ok ? (
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                  ) : (
                    <X className="w-4 h-4 shrink-0" />
                  )}
                  {text}
                </li>
              ))}
            </ul>
            <a
              href="#register"
              className="block w-full py-3 text-center border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Bắt đầu miễn phí
            </a>
          </div>

          {/* Growth – featured */}
          <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl relative lg:scale-105 z-10 text-white">
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Phổ biến nhất
              </span>
            </div>
            <h4 className="text-xl font-bold mb-2">Tăng trưởng</h4>
            <p className="text-sm text-gray-400 mb-6 h-10">
              Giải pháp toàn diện để tối đa hóa doanh thu.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold">499.000đ</span>
              <span className="text-gray-400">/tháng</span>
            </div>
            <div className="text-sm font-medium text-white mb-6 bg-white/10 inline-block px-3 py-1 rounded-full border border-white/20">
              Hoa hồng: Chỉ 10% / giao dịch
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Không giới hạn dịch vụ',
                'Đồng bộ đa kênh (Channel Manager)',
                'Công cụ Marketing tích hợp',
                'Thanh toán nhanh (T+3)',
                'Hỗ trợ ưu tiên 24/7 (Zalo/Phone)',
              ].map((text) => (
                <li key={text} className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
            <a
              href="#register"
              className="block w-full py-4 text-center bg-orange-600 text-white font-medium rounded-xl hover:bg-orange-500 transition-colors shadow-lg shadow-orange-900/30"
            >
              Đăng ký ngay
            </a>
          </div>

          {/* Enterprise */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Cao cấp</h4>
            <p className="text-sm text-gray-500 mb-6 h-10">
              Dành cho chuỗi thương hiệu quy mô lớn.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">Liên hệ</span>
            </div>
            <div className="text-sm font-medium text-gray-600 mb-6 bg-gray-100 inline-block px-3 py-1 rounded-full border border-gray-200">
              Chiết khấu tùy chỉnh
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Mọi tính năng gói Tăng trưởng',
                'API tích hợp hệ thống nội bộ',
                'Quản lý đa chi nhánh',
                'Key Account Manager riêng',
                'Thanh toán tức thì (T+1)',
              ].map((text) => (
                <li key={text} className="flex items-center gap-3 text-gray-600 text-sm">
                  <Check className="w-4 h-4 text-green-500 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
            <a
              href="#register"
              className="block w-full py-3 text-center border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Yêu cầu báo giá
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Testimonials Section
// ---------------------------------------------------------------------------
const testimonials = [
  {
    quote:
      'Từ khi hợp tác với Visit Vietnam, lượng khách quốc tế đặt phòng tăng 40%. Hệ thống quản lý rất trực quan và đội ngũ hỗ trợ vô cùng nhiệt tình.',
    name: 'Nguyễn Hoàng Linh',
    role: 'Giám đốc Kinh doanh, Boutique Hotel HN',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  },
  {
    quote:
      'Tính năng Channel Manager giúp chúng tôi tránh được tình trạng overbooking hoàn toàn trong mùa cao điểm. Giải pháp hoàn hảo cho Tour Operator.',
    name: 'Trần Văn Cường',
    role: 'CEO, Viet Adventure Tours',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  },
  {
    quote:
      'Tích hợp menu online và thanh toán trước giúp nhà hàng tối ưu chi phí vận hành đáng kể. Dòng tiền về nhanh, đối soát rất dễ dàng.',
    name: 'Lê Thu Hà',
    role: 'Quản lý, The Lotus Restaurant',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  },
]

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brands */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Được tin dùng bởi các thương hiệu hàng đầu
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-bold text-gray-800 font-serif">InterContinental</span>
            <span className="text-2xl font-black tracking-tighter text-blue-800">VINPEARL</span>
            <span className="text-2xl italic text-yellow-600">Sun Group</span>
            <span className="text-xl font-bold tracking-widest text-gray-900">MARRIOTT</span>
            <span className="text-2xl text-red-800">Meliá</span>
            <span className="text-2xl font-bold text-green-800">FLC</span>
            <span className="text-xl font-medium tracking-widest text-blue-900">WYNDHAM</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name, role, avatar }) => (
            <div key={name} className="bg-gray-50 p-8 rounded-2xl relative">
              <Quote className="w-8 h-8 text-orange-200 absolute top-6 left-6" />
              <p className="text-gray-700 relative z-10 mb-6 italic pt-6">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">{name}</h5>
                  <p className="text-xs text-gray-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Onboarding Steps
// ---------------------------------------------------------------------------
const steps = [
  {
    num: 1,
    title: 'Đăng ký nhanh',
    desc: 'Điền form thông tin doanh nghiệp chỉ trong 2 phút.',
    active: false,
  },
  {
    num: 2,
    title: 'Duyệt & Setup',
    desc: 'Đội ngũ hỗ trợ xác minh và tạo gian hàng (24-48h).',
    active: false,
  },
  {
    num: 3,
    title: 'Nhận Onboarding Kit',
    desc: 'Tài liệu hướng dẫn, training sử dụng hệ thống.',
    active: false,
  },
  {
    num: 4,
    title: 'Nhận khách & Doanh thu',
    desc: 'Sẵn sàng phục vụ khách hàng và theo dõi tăng trưởng.',
    active: true,
  },
]

function OnboardingSteps() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lên sóng trong 4 bước đơn giản
          </h3>
          <p className="text-gray-600 text-lg">
            Quy trình onboarding nhanh chóng giúp bạn bắt đầu kinh doanh ngay lập tức.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map(({ num, title, desc, active }) => (
              <div key={num} className="text-center group">
                <div
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-4 relative transition-all ${
                    active
                      ? 'bg-orange-600 border-4 border-orange-200 text-white shadow-lg shadow-orange-200'
                      : 'bg-white border-4 border-gray-100 text-gray-400 group-hover:border-orange-600 group-hover:text-orange-600'
                  }`}
                >
                  {num}
                  {active && (
                    <div className="absolute inset-0 bg-orange-400/20 rounded-full animate-ping -z-10" />
                  )}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
                <p className="text-sm text-gray-500 px-4">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Register + FAQ Section
// ---------------------------------------------------------------------------
const faqs = [
  {
    q: 'Tôi có phải trả phí đăng ký ban đầu không?',
    a: 'Không. Bạn hoàn toàn có thể bắt đầu với gói Khởi Đầu miễn phí. Chúng tôi chỉ thu phí hoa hồng trên các giao dịch thành công. Các gói cao cấp hơn sẽ tính phí thuê bao hàng tháng.',
  },
  {
    q: 'Bao lâu tôi nhận được tiền thanh toán?',
    a: 'Thời gian nhận tiền phụ thuộc vào gói đối tác của bạn. Gói Khởi đầu là T+7 (7 ngày sau khi khách check-out), Gói Tăng trưởng là T+3, và Gói Cao cấp hỗ trợ thanh toán tức thì (T+1).',
  },
  {
    q: 'Hệ thống có hỗ trợ đồng bộ với PMS hiện tại của tôi?',
    a: 'Có. Visit Vietnam hỗ trợ kết nối API với hơn 50+ hệ thống PMS phổ biến trên thị trường. Vui lòng liên hệ đội ngũ kỹ thuật để kiểm tra tương thích cụ thể với phần mềm bạn đang dùng.',
  },
  {
    q: 'Quy trình duyệt hồ sơ mất bao lâu?',
    a: 'Thông thường hồ sơ sẽ được duyệt trong vòng 24-48 giờ làm việc kể từ khi bạn cung cấp đủ giấy phép kinh doanh và hình ảnh cơ sở vật chất đạt chuẩn.',
  },
]

function RegisterSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = useCallback(
    (idx: number) => setOpenFaq((prev) => (prev === idx ? null : idx)),
    [],
  )

  return (
    <section id="register" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Form */}
            <div className="p-8 lg:p-12 bg-orange-600 text-white">
              <h3 className="text-3xl font-bold mb-2">Sẵn sàng đồng hành?</h3>
              <p className="text-orange-100 mb-8 text-sm">
                Để lại thông tin, chuyên viên của chúng tôi sẽ liên hệ tư vấn gói giải pháp phù hợp
                nhất trong 24h.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-orange-100 mb-1">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-orange-100 mb-1">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                      placeholder="09xx xxx xxx"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-100 mb-1">Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    placeholder="email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-100 mb-1">
                    Tên doanh nghiệp / Khách sạn
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    placeholder="Tên đơn vị kinh doanh"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-100 mb-1">
                    Loại hình dịch vụ
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all appearance-none">
                    <option value="" className="text-gray-900">
                      Chọn loại hình
                    </option>
                    <option value="hotel" className="text-gray-900">
                      Khách sạn / Homestay / Resort
                    </option>
                    <option value="tour" className="text-gray-900">
                      Tour / Hoạt động trải nghiệm
                    </option>
                    <option value="fnb" className="text-gray-900">
                      Nhà hàng / Quán ăn
                    </option>
                    <option value="other" className="text-gray-900">
                      Khác
                    </option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 mt-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg shadow-black/10"
                >
                  Gửi thông tin đăng ký
                </button>
                <p className="text-xs text-orange-200 text-center mt-4">
                  Bằng cách nhấp vào &ldquo;Gửi thông tin&rdquo;, bạn đồng ý với Điều khoản và Chính
                  sách bảo mật của chúng tôi.
                </p>
              </form>
            </div>

            {/* FAQ */}
            <div className="p-8 lg:p-12 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Câu hỏi thường gặp</h3>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="px-6 py-4 flex justify-between items-center bg-gray-50/50 hover:bg-gray-50 transition-colors">
                      <h5 className="font-semibold text-gray-900 pr-4">{faq.q}</h5>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                          openFaq === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-4 pt-2 text-gray-600 text-sm bg-white">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Business Footer
// ---------------------------------------------------------------------------
function BusinessFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                V
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Visit<span className="text-orange-400">Vietnam</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Nền tảng công nghệ du lịch hàng đầu Việt Nam, kết nối doanh nghiệp nội địa với du
              khách toàn cầu qua hệ sinh thái giải pháp toàn diện.
            </p>
            <div className="flex space-x-4">
              {[FacebookIcon, LinkedinIcon, YoutubeIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Sản phẩm</h4>
            <ul className="space-y-4">
              {[
                'Dành cho Khách sạn',
                'Dành cho Tour/Trải nghiệm',
                'Dành cho Nhà hàng',
                'Bảng giá B2B',
                'Tích hợp API',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">
              Hỗ trợ đối tác
            </h4>
            <ul className="space-y-4">
              {[
                'Trung tâm trợ giúp',
                'Tài liệu hướng dẫn (Wiki)',
                'Chính sách bảo mật',
                'Điều khoản dịch vụ',
                'Blog kinh doanh',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  Tầng 12, Tòa nhà Techcombank, 191 Bà Triệu, Hà Nội
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-gray-400 text-sm">1900 xxxx (Hỗ trợ 24/7)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-gray-400 text-sm">b2b@visitvietnam.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Visit Vietnam. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Tiếng Việt
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              English
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function ForBusinessPage() {
  return (
    <div className="font-sans text-gray-800 antialiased bg-gray-50 scroll-smooth">
      <Navbar variant="light" />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <SolutionsSection />
        <PricingSection />
        <TestimonialsSection />
        <OnboardingSteps />
        <RegisterSection />
      </main>
      <BusinessFooter />
    </div>
  )
}
