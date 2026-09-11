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
      <button
        type="button"
        className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-opodis-100 to-opodis-cream text-xs font-bold text-opodis-700 shadow-opodis transition active:scale-95"
        aria-label="Ảnh đại diện người dùng"
      >
        NH
        <span
          className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-opodis-500"
          aria-hidden="true"
        />
      </button>

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
