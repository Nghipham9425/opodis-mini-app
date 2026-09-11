import familyHero from "@/static/family-hero.jpg"

function HeroBanner() {
  return (
    <section
      className="
        relative isolate mt-2 min-h-[240px] overflow-hidden
        rounded-opodis-lg border border-opodis-border/60
        bg-[#f5efd7] px-6 py-8
        shadow-[0_8px_24px_rgba(35,76,56,0.06)]
      "
    >
      <img
        src={familyHero}
        alt="Gia đình khỏe mạnh và hạnh phúc"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[67%_center]"
      />

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f7f5e9] via-[#f7f5e9]/90 to-[#f7f5e9]/10"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-12 -left-10 -z-10 h-32 w-32 rounded-full border-[16px] border-white/35"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[64%]">
        <span
          className="
            inline-flex rounded-full border border-white/70 bg-white/75 px-2.5 py-1
            text-[9px] font-bold uppercase tracking-[0.14em]
            text-opodis-700 backdrop-blur-sm
          "
        >
          Dược liệu Việt
        </span>

        <h1 className="mb-3 mt-4 text-[28px] font-light leading-[1.08] text-opodis-text">
          Dịu lành cho
          <span className="block font-semibold text-opodis-700">cả gia đình</span>
        </h1>

        <p
          className="
            m-0 text-xs leading-5
            text-opodis-muted
          "
        >
          Chăm sóc mỗi ngày bằng những giá trị gần gũi từ thiên nhiên.
        </p>
      </div>
    </section>
  )
}

export default HeroBanner
