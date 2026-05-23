import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// もし src/App.tsx などのメインコンポーネントがあればそれを読み込みます
// なければ、とりあえず画面に文字を出すだけのシンプルな記述にします
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">Hello React + Hono + Tailwind!</h1>
    </div>
  </StrictMode>,
)
