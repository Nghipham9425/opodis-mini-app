import { useLocation, useNavigate } from "zmp-ui"

function BottomNavigation() {
  const location = useLocation()
  const navigate = useNavigate()

  const isProducts =
    location.pathname === "/" || location.pathname.startsWith("/product")

  const isAbout = location.pathname === "/about"

  return (
    <nav
      className="liquid-glass fixed bottom-[calc(env(safe-area-inset-bottom)+12px)] left-1/2 z-30 flex w-[calc(100%-32px)] max-w-md -translate-x-1/2 items-center gap-1 rounded-full p-1.5"
      aria-label="Điều hướng chính"
    >
      <span
        className={`pointer-events-none absolute bottom-1.5 left-1.5 top-1.5 w-[calc(50%-0.125rem)] rounded-full bg-opodis-700 shadow-opodis transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          isAbout ? "translate-x-[calc(100%+0.25rem)]" : "translate-x-0"
        }`}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={() => navigate("/")}
        className={`relative z-10 flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full px-4 text-xs font-semibold transition-colors duration-300 motion-reduce:transition-none ${
          isProducts ? "text-white" : "text-opodis-muted active:bg-white/50"
        }`}
        aria-current={isProducts ? "page" : undefined}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect x="4" y="4" width="6" height="6" rx="2" />
          <rect x="14" y="4" width="6" height="6" rx="2" />
          <rect x="4" y="14" width="6" height="6" rx="2" />
          <rect x="14" y="14" width="6" height="6" rx="2" />
        </svg>
        Sản phẩm
      </button>

      <button
        type="button"
        onClick={() => navigate("/about")}
        className={`relative z-10 flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full px-4 text-xs font-semibold transition-colors duration-300 motion-reduce:transition-none ${
          isAbout ? "text-white" : "text-opodis-muted active:bg-white/50"
        }`}
        aria-current={isAbout ? "page" : undefined}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="8" />
          <path d="M12 11v5" />
          <path d="M12 8h.01" />
        </svg>
        Giới thiệu
      </button>
    </nav>
  )
}

export default BottomNavigation
