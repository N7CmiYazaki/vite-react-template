// src/main.tsx の中身はおそらくこうなっているはずです
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './index.tsx' // ここで index.tsx を読み込んでいるか確認！

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)