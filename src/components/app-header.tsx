import { Icon } from "zmp-ui"

import opodisLogo from "@/static/opodis-logo-transparent.png"

function AppHeader() {
  return (
    <header
      className="
        sticky top-0 z-20 -mx-4 flex items-center justify-between
        border-b border-opodis-border/60 bg-opodis-50/90 px-4
        pb-4 pt-[calc(env(safe-area-inset-top)+30px)] backdrop-blur-md
      "
    >
      <div
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-white bg-opodis-700 text-white shadow-opodis"
        role="img"
        aria-label="Biểu tượng lá Opodis"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M19.7 4.3C13.6 4.5 7.2 6.6 5.2 11.5c-1.1 2.7-.2 5.5 2.1 6.7 2.4 1.3 5.4.4 7.2-1.8 2.7-3.3 3.6-7.9 5.2-12.1Z"
            fill="currentColor"
            opacity=".95"
          />
          <path
            d="M4 20c2.4-4.7 6.2-8 11.8-10.3"
            stroke="#1f6147"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <img
        src={opodisLogo}
        alt="Opodis Pharma"
        className="absolute left-1/2 h-9 w-auto max-w-[136px] -translate-x-1/2 object-contain mix-blend-multiply"
      />

      <button
        type="button"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-opodis-border bg-white/75 text-opodis-700 transition active:scale-95 active:bg-white"
        aria-label="Thông báo"
      >
        <Icon icon="zi-notif" size={21} />
      </button>
    </header>
  )
}

export default AppHeader
