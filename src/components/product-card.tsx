import React from "react"
import { useNavigate } from "zmp-ui"

import { formatPrice } from "@/data/products"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
  badge?: string
}

function ProductCard({ product, badge = "Nổi bật" }: ProductCardProps) {
  const navigate = useNavigate()

  const openProductDetail = () => {
    navigate(`/product/${product.id}`)
  }

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src =
      "https://placehold.co/600x600/e7f6ee/18845f?text=Opodis"
  }

  return (
    <button
      type="button"
      onClick={openProductDetail}
      aria-label={`Xem chi tiết ${product.name}`}
      className="group relative w-full min-w-0 overflow-hidden rounded-opodis border border-white/80 bg-gradient-to-b from-[#eef2ee] to-[#e7ebe7] px-3 pb-4 pt-3 text-center shadow-opodis transition duration-200 active:scale-[0.98] active:border-opodis-200 active:shadow-none"
    >
      <span className="inline-flex rounded-full bg-black/5 px-3 py-1 text-[10px] font-medium text-opodis-muted">
        {badge}
      </span>

      <span className="relative mt-1 block aspect-[1/0.82] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={handleImageError}
          className="h-full w-full object-contain px-1 py-2 mix-blend-multiply transition-transform duration-200 group-active:scale-105"
        />
      </span>

      <span className="flex min-h-[62px] flex-col items-center justify-end">
        <span className="line-clamp-1 max-w-full text-[13px] font-medium leading-5 text-opodis-muted">
          {product.name}
        </span>

        <span className="mt-0.5 text-[18px] font-semibold tracking-[-0.02em] text-opodis-text">
          {formatPrice(product.price)}
        </span>

        <span className="sr-only">Giá minh họa</span>
      </span>
    </button>
  )
}

export default ProductCard
