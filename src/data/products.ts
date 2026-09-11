import type { Product } from "@/types/product"

import clinhandsGelImage from "@/static/products/clinhands-gel.png"
import dauTramEmcareImage from "@/static/products/dau-tram-emcare.png"
import opfluImage from "@/static/products/opflu.jpg"
import phytaminImage from "@/static/products/phytamin.png"
import phytobebePremiumImage from "@/static/products/phytobebe-premium.png"
import tinhDauTramThienAnImage from "@/static/products/tinh-dau-tram-thien-an.jpg"

export const products: Product[] = [
  {
    id: "dau-tram-emcare",
    name: "Dầu Tràm Emcare",
    category: "Chăm sóc mẹ và bé",
    price: 79000,
    image: dauTramEmcareImage,
    volume: "Chai 25ml hoặc 30ml",
    shortDescription:
      "Dầu tràm thơm dịu, tiện dùng để chăm sóc và giữ ấm cho mẹ và bé.",
    description:
      "Sản phẩm có hương thơm dịu nhẹ, hỗ trợ giữ ấm cơ thể và chăm sóc gia đình hằng ngày.",
  },
  {
    id: "opflu",
    name: "OPFLU",
    category: "Chăm sóc gia đình",
    price: 95000,
    image: opfluImage,
    volume: "Chai 250ml",
    shortDescription:
      "Dung dịch súc miệng và họng cho cảm giác sạch thoáng, thơm mát.",
    description:
      "Sản phẩm mang lại cảm giác sạch và thơm mát, phù hợp với nhu cầu chăm sóc răng miệng hằng ngày.",
  },
  {
    id: "tinh-dau-tram-thien-an",
    name: "Tinh Dầu Tràm Thiên Ấn",
    category: "Chăm sóc mẹ và bé",
    price: 119000,
    image: tinhDauTramThienAnImage,
    volume: "30ml",
    shortDescription:
      "Tinh dầu tràm nguyên chất với hương thơm ấm áp, gần gũi.",
    description:
      "Tinh Dầu Tràm Thiên Ấn – sản phẩm 100% tinh dầu tràm thiên nhiên của Opodis Pharma, được đặc chế dành cho mẹ và bé, giúp phòng bệnh, giữ ấm và bảo vệ sức khỏe an toàn, tự nhiên.",
  },
  {
    id: "phytobebe-premium",
    name: "PHYTOBEBE PREMIUM",
    category: "Chăm sóc mẹ và bé",
    price: 135000,
    image: phytobebePremiumImage,
    volume: "Chai 100ml hoặc 250ml",
    shortDescription:
      "Tắm gội thảo dược hai trong một, làm sạch dịu nhẹ cho bé.",
    description:
      "Sản phẩm tắm gội hai trong một, làm sạch dịu nhẹ cho da và tóc của bé.",
  },
  {
    id: "phytamin",
    name: "PHYTAMIN",
    category: "Chăm sóc gia đình",
    price: 50000,
    image: phytaminImage,
    volume: "Chai 30ml",
    shortDescription:
      "Dung dịch chăm sóc da kết hợp thành phần nghệ và dầu mù u.",
    description:
      "Dung dịch sát khuẩn Phytamin từ nghệ và dầu mù u giúp kháng khuẩn, chống nhiễm trùng, làm dịu và phục hồi vết thương nhanh chóng, hạn chế thâm sẹo.",
  },
  {
    id: "clinhands-gel",
    name: "CLINHANDS GEL",
    category: "KHỬ KHUẨN - SÁT KHUẨN TAY",
    price: 100000,
    image: clinhandsGelImage,
    volume: "Chai 500ml",
    shortDescription:
      "Gel làm sạch tay nhanh, tiện sử dụng mà không cần rửa lại với nước.",
    description:
      "Clinhands Gel – Dung dịch sát khuẩn tay nhanh của Opodis Pharma, dùng trong y tế và sinh hoạt hằng ngày giúp diệt khuẩn – kháng nấm – bảo vệ tay sạch khuẩn không cần rửa nước. Sản phẩm được khuyến nghị sử dụng tại bệnh viện, trường học, văn phòng và cộng đồng.",
  },
]

export function findProductById(id: string) {
  return products.find((product) => product.id === id)
}
export function formatPrice(price: number) {
  return `${new Intl.NumberFormat("vi-VN").format(price)}đ`
}
