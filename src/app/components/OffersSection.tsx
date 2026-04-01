export const OffersSection = () => {
  const handleOfferClick = (name: string) => {
    alert(`Đang xem ưu đãi: ${name}`)
  }

  return (
    <section className="py-24 px-8 max-w-[1440px] mx-auto bg-section-bg relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Ưu đãi độc quyền</h2>
          <p className="text-gray-500">Tiết kiệm hơn khi đặt combo qua Visit Vietnam.</p>
        </div>
        <button
          onClick={() => handleOfferClick('tất cả')}
          className="flex items-center text-sm font-semibold text-navy hover:text-orange-500 transition-colors gap-1 border border-gray-200 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md"
        >
          Xem tất cả ưu đãi
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-3xl p-6 text-white shadow-lg relative overflow-hidden group bg-gradient-ocean">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl group-hover:bg-white/20 transition-all"></div>
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/30">
            Flash Sale
          </span>
          <h3 className="text-2xl font-bold mb-2">Combo Phú Quốc 3N2Đ</h3>
          <p className="text-white/80 text-sm mb-6">
            Vé máy bay khứ hồi + Resort 5 sao + Đưa đón sân bay.
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div>
              <p className="text-sm line-through text-white/60">5.500.000đ</p>
              <p className="text-xl font-bold">3.990.000đ</p>
            </div>
            <button
              onClick={() => handleOfferClick('Combo Phú Quốc')}
              className="w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 text-gray-900 shadow-lg border border-gray-100 flex flex-col group hover:border-orange-200 transition-colors">
          <div className="h-32 rounded-2xl bg-gray-100 mb-4 overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1621508216172-870f7f2b1d75?q=80&w=600&auto=format&fit=crop"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              alt="Sapa"
            />
            <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
              -20%
            </div>
          </div>
          <h3 className="text-lg font-bold mb-1">Trekking Sapa &amp; Bản làng</h3>
          <p className="text-gray-500 text-xs mb-4">Trải nghiệm văn hóa Tây Bắc đích thực.</p>
          <div className="mt-auto flex items-center justify-between">
            <p className="text-lg font-bold text-navy">Từ 1.200.000đ</p>
            <button
              onClick={() => handleOfferClick('Sapa')}
              className="text-orange-500 text-sm font-semibold hover:underline"
            >
              Chi tiết
            </button>
          </div>
        </div>

        <div className="rounded-3xl p-6 text-white shadow-lg relative overflow-hidden group bg-gradient-sunset">
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/30">
            Hot Deal
          </span>
          <h3 className="text-2xl font-bold mb-2">Du thuyền Hạ Long 5 sao</h3>
          <p className="text-white/90 text-sm mb-6">
            Trải nghiệm nghỉ dưỡng sang trọng trên di sản thế giới.
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div>
              <p className="text-sm text-white/80">Chỉ từ</p>
              <p className="text-xl font-bold">
                2.450.000đ<span className="text-sm font-normal">/khách</span>
              </p>
            </div>
            <button
              onClick={() => handleOfferClick('Hạ Long')}
              className="w-10 h-10 bg-white text-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 text-gray-900 shadow-lg border border-gray-100 flex flex-col group hover:border-orange-200 transition-colors">
          <div className="h-32 rounded-2xl bg-gray-100 mb-4 overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1596423735880-5a3d062dc7ac?q=80&w=600&auto=format&fit=crop"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              alt="Nha Trang"
            />
            <div className="absolute top-2 left-2 px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded">
              Tặng vé VinWonders
            </div>
          </div>
          <h3 className="text-lg font-bold mb-1">Kỳ nghỉ gia đình Nha Trang</h3>
          <p className="text-gray-500 text-xs mb-4">
            Combo nghỉ dưỡng &amp; vui chơi trọn gói 4N3Đ.
          </p>
          <div className="mt-auto flex items-center justify-between">
            <p className="text-lg font-bold text-navy">4.800.000đ</p>
            <button
              onClick={() => handleOfferClick('Nha Trang')}
              className="text-orange-500 text-sm font-semibold hover:underline"
            >
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
