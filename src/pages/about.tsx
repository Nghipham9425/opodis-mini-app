import { Page } from "zmp-ui"

import opodisLogo from "@/static/opodis-logo-transparent.png"
function AboutPage() {
  return (
    <Page className="page page-with-bottom-nav" hideScrollbar>
      <header className="sticky top-0 z-20 -mx-4 flex min-h-[64px] items-center justify-center border-b border-opodis-border/50 bg-opodis-50/90 px-4 pb-3 pt-[calc(env(safe-area-inset-top)+28px)] backdrop-blur-md">
        <h1 className="m-0 text-sm font-semibold text-opodis-text">
          Giới thiệu
        </h1>
      </header>

      <main className="pb-[88px]">
        <section className="relative overflow-hidden rounded-opodis-lg border border-opodis-border/60 bg-gradient-to-br from-opodis-100 via-white to-opodis-cream px-6 py-8 shadow-[0_8px_24px_rgba(35,76,56,0.05)]">
          <div className="absolute -bottom-12 -right-8 h-40 w-40 rounded-full border-[18px] border-white/45" aria-hidden="true" />

          <p className="relative m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-opodis-500">
            Dược liệu Việt
          </p>

          <img
            src={opodisLogo}
            alt="Opodis Pharma"
            className="relative mt-4 h-auto w-36 object-contain"
          />

          <h2 className="relative mb-0 mt-5 max-w-[280px] text-2xl font-bold leading-tight text-opodis-text">
            Chăm sóc sức khỏe
            <span className="block text-opodis-700">từ thiên nhiên</span>
          </h2>

          <p className="relative mb-0 mt-3 text-sm leading-6 text-opodis-muted">
            Opodis Pharma hướng đến những giải pháp chăm sóc gần gũi, tiện dụng
            và phù hợp với nhu cầu của mỗi gia đình.
          </p>
        </section>

        <section className="pt-7">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-opodis-500">
            Về chúng tôi
          </p>

          <h2 className="mb-0 mt-1 text-xl font-bold text-opodis-text">
            Opodis Pharma
          </h2>

          <p className="mb-0 mt-3 text-sm leading-6 text-opodis-muted">
            Công ty hoạt động trong lĩnh vực dược phẩm và dược liệu, mang đến
            các sản phẩm chăm sóc sức khỏe dành cho mẹ, bé và gia đình.
          </p>
        </section>

        <section className="mt-7">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-opodis-500">
            Liên hệ
          </p>

          <h2 className="mb-4 mt-1 text-xl font-bold text-opodis-text">
            Thông tin công ty
          </h2>

          <div className="space-y-3">
            <article className="rounded-opodis border border-opodis-border bg-white p-4">
              <p className="m-0 text-xs font-semibold text-opodis-700">
                Công ty TNHH Dược phẩm – Dược liệu Opodis
              </p>

              <p className="mb-0 mt-2 text-sm leading-6 text-opodis-muted">
                Lô 78, Khu CX & CN Linh Trung III, Tây Ninh, Việt Nam
              </p>

              <p className="mb-0 mt-2 text-sm font-semibold text-opodis-text">
                (0276) 3898 656
              </p>
            </article>

            <article className="rounded-opodis border border-opodis-border bg-white p-4">
              <p className="m-0 text-xs font-semibold text-opodis-700">
                Công ty TNHH Dược phẩm – Dược liệu Trí Nghĩa
              </p>

              <p className="mb-0 mt-2 text-sm leading-6 text-opodis-muted">
                Số 15 đường số 4, KDC Intresco, Bình Hưng, Bình Chánh, TP.HCM
              </p>

              <p className="mb-0 mt-2 text-sm font-semibold text-opodis-text">
                (0283) 7582 741
              </p>
            </article>
          </div>
        </section>

        <footer className="pt-8 text-center">
          <p className="m-0 text-[11px] text-opodis-muted">
            © 2026 Opodis Pharma
          </p>
        </footer>
      </main>
    </Page>
  )
}

export default AboutPage
