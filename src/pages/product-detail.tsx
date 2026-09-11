import React from "react"
import { Page, useNavigate, useParams } from "zmp-ui"

import { findProductById, formatPrice, products } from "@/data/products"

function ProductDetailPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const product = findProductById(id ?? "")
  const relatedProducts = product
    ? products
        .filter((item) => item.id !== product.id)
        .sort(
          (first, second) =>
            Number(second.category === product.category) -
            Number(first.category === product.category),
        )
        .slice(0, 4)
    : []

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src =
      "https://placehold.co/800x800/e7f6ee/18845f?text=Opodis"
  }

  if (!product) {
    return (
      <Page className="page" hideScrollbar>
        <main className="flex min-h-screen flex-col items-center justify-center text-center">
          <div className="mb-5 grid h-16 w-16 place-items-center rounded-full bg-opodis-100 text-2xl">
            ?
          </div>

          <h1 className="m-0 text-xl font-bold text-opodis-text">
            Không tìm thấy sản phẩm
          </h1>

          <p className="mb-6 mt-2 text-sm leading-6 text-opodis-muted">
            Sản phẩm không tồn tại hoặc đường dẫn chưa chính xác.
          </p>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="rounded-full bg-opodis-700 px-6 py-3 text-sm font-semibold text-white active:scale-95"
          >
            Về danh sách sản phẩm
          </button>
        </main>
      </Page>
    )
  }

  return (
    <Page className="page" hideScrollbar>
      <header className="sticky top-0 z-20 -mx-4 flex items-center border-b border-opodis-border/50 bg-opodis-50/90 px-4 pb-3 pt-[calc(env(safe-area-inset-top)+28px)] backdrop-blur-md">
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Quay lại"
          className="grid h-9 w-9 place-items-center rounded-full bg-transparent text-xl text-opodis-text transition active:scale-95 active:bg-opodis-100"
        >
          ←
        </button>

        <h1 className="absolute left-1/2 m-0 -translate-x-1/2 text-sm font-semibold text-opodis-text">
          Chi tiết sản phẩm
        </h1>
      </header>

      <main className="pb-8">
        <section className="relative min-h-[340px] overflow-hidden rounded-opodis-lg bg-[#e7eee5]">
          <div className="absolute inset-7">
            <img
              src={product.image}
              alt={product.name}
              onError={handleImageError}
              className="h-full w-full object-contain mix-blend-multiply drop-shadow-[0_18px_20px_rgba(24,55,44,0.12)]"
            />
          </div>
        </section>

        <section className="pt-6">
          <h2 className="m-0 text-2xl font-bold leading-tight text-opodis-text">
            {product.name}
          </h2>

          <p className="mb-0 mt-2 text-xl font-bold text-opodis-700">
            {formatPrice(product.price)}
          </p>

          <dl className="mb-0 mt-5 grid grid-cols-2 gap-3">
            <div className="min-w-0 rounded-opodis border border-opodis-border bg-white/70 p-4">
              <div className="mb-4 grid h-9 w-9 place-items-center rounded-full bg-opodis-100 text-opodis-700">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  aria-hidden="true"
                >
                  <rect x="4" y="4" width="6" height="6" rx="1.5" />
                  <rect x="14" y="4" width="6" height="6" rx="1.5" />
                  <rect x="4" y="14" width="6" height="6" rx="1.5" />
                  <rect x="14" y="14" width="6" height="6" rx="1.5" />
                </svg>
              </div>
              <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-opodis-500">
                Danh mục
              </dt>
              <dd className="mb-0 ml-0 mt-1.5 text-xs font-semibold leading-5 text-opodis-text">
                {product.category}
              </dd>
            </div>

            <div className="min-w-0 rounded-opodis border border-opodis-border bg-opodis-cream/55 p-4">
              <div className="mb-4 grid h-9 w-9 place-items-center rounded-full bg-white/75 text-opodis-700">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 3h6v4l2 2v9.5A2.5 2.5 0 0 1 14.5 21h-5A2.5 2.5 0 0 1 7 18.5V9l2-2V3Z" />
                  <path d="M9 7h6M9 13h6" />
                </svg>
              </div>
              <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-opodis-500">
                Quy cách
              </dt>
              <dd className="mb-0 ml-0 mt-1.5 text-xs font-semibold leading-5 text-opodis-text">
                {product.volume}
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <h3 className="m-0 text-base font-semibold text-opodis-text">
              Thông tin sản phẩm
            </h3>

            <p className="mb-0 mt-3 text-sm font-medium leading-6 text-opodis-text">
              {product.shortDescription}
            </p>

            <p className="mb-0 mt-3 text-sm leading-6 text-opodis-muted">
              {product.description}
            </p>
          </div>

          <section className="mt-7" aria-labelledby="related-products-title">
            <div className="mb-4 flex items-end justify-between gap-3">
              <div>
                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-opodis-500">
                  Có thể bạn quan tâm
                </p>
                <h3
                  id="related-products-title"
                  className="mb-0 mt-1 text-lg font-bold text-opodis-text"
                >
                  Sản phẩm liên quan
                </h3>
              </div>

              <span className="shrink-0 text-[11px] text-opodis-muted">
                Vuốt để xem
              </span>
            </div>

            <div className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2">
              {relatedProducts.map((relatedProduct) => (
                <button
                  key={relatedProduct.id}
                  type="button"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  className="w-[142px] shrink-0 snap-start overflow-hidden rounded-opodis border border-opodis-border/70 bg-white/70 p-2.5 text-left transition active:scale-[0.98] active:bg-white"
                  aria-label={`Xem chi tiết ${relatedProduct.name}`}
                >
                  <span className="block aspect-square overflow-hidden rounded-[14px] bg-[#edf1ec] p-2">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      loading="lazy"
                      onError={handleImageError}
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </span>

                  <span className="mt-2 block truncate text-xs font-semibold text-opodis-text">
                    {relatedProduct.name}
                  </span>
                  <span className="mt-1 block text-sm font-bold text-opodis-700">
                    {formatPrice(relatedProduct.price)}
                  </span>
                </button>
              ))}
            </div>
          </section>

        </section>
      </main>
    </Page>
  )
}

export default ProductDetailPage
