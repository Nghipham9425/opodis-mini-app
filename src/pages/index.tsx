import { useMemo, useState } from "react"
import { Page } from "zmp-ui"

import AppHeader from "@/components/app-header"
import HeroBanner from "@/components/hero-banner"
import ProductCard from "@/components/product-card"
import { products } from "@/data/products"

function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả")

  const categories = [
    { label: "Tất cả", match: "" },
    { label: "Mẹ & bé", match: "mẹ và bé" },
    { label: "Gia đình", match: "gia đình" },
    { label: "Sát khuẩn", match: "sát khuẩn" },
  ]

  const filteredProducts = useMemo(() => {
    const selected = categories.find(
      (category) => category.label === activeCategory,
    )

    if (!selected?.match) {
      return products
    }

    return products.filter((product) =>
      product.category.toLowerCase().includes(selected.match),
    )
  }, [activeCategory])

  const badges = ["Bán chạy", "Nổi bật", "Được yêu thích"]

  return (
    <Page className="page" hideScrollbar>
      <AppHeader />

      <main>
        <HeroBanner />

        <section className="pb-7 pt-6">
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
            {categories.map((category) => {
              const isActive = activeCategory === category.label

              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => setActiveCategory(category.label)}
                  className={`min-h-9 shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition active:scale-95 ${
                    isActive
                      ? "border-opodis-700 bg-opodis-700 text-white"
                      : "border-opodis-border bg-white/70 text-opodis-muted"
                  }`}
                  aria-pressed={isActive}
                >
                  {category.label}
                </button>
              )
            })}
          </div>

          <div className="mb-5 mt-7 flex items-end justify-between gap-4">
            <div>
              <p
                className="
                  m-0 text-[10px] font-bold uppercase
                  tracking-[0.16em]
                  text-opodis-500
                "
              >
                Khám phá
              </p>

              <h2
                className="
                  m-0 mt-1
                  text-[21px] font-bold
                  text-opodis-text
                "
              >
                Sản phẩm nổi bật
              </h2>
            </div>

            <span
              className="
                shrink-0 rounded-full
                border border-white bg-opodis-100
                px-3 py-1.5
                text-xs font-semibold
                text-opodis-700
              "
            >
              {filteredProducts.length} sản phẩm
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                badge={badges[index % badges.length]}
              />
            ))}
          </div>

          <footer className="pt-5 text-center">
            <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-opodis-200" />
            <p className="m-0 text-[11px] font-bold uppercase tracking-[0.18em] text-opodis-700">
              Opodis Pharma
            </p>
            <p className="mb-0 mt-1 text-xs text-opodis-muted">
              Dịu lành từ thiên nhiên · Tận tâm cho gia đình
            </p>
            <p className="mb-0 mt-1.5 text-[10px] text-opodis-muted/70">
              © 2026 Opodis Pharma
            </p>
          </footer>
        </section>
      </main>
    </Page>
  )
}

export default HomePage
