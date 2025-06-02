import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import React from 'react'
import App from 'RootComponent'

import './index.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
