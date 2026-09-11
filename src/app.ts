// ZaUI stylesheet
import "zmp-ui/zaui.css"
// Vietnamese-friendly local font
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
// Tailwind stylesheet
import "@/css/tailwind.scss"
// Your stylesheet
import "@/css/app.scss"

// React core
import React from "react"
import { createRoot } from "react-dom/client"

// Mount the app
import Layout from "@/components/layout"

// Expose app configuration
import appConfig from "../app-config.json"

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig as any
}

const root = createRoot(document.getElementById("app")!)
root.render(React.createElement(Layout))
