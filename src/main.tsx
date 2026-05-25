import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './index'
import './index.css' // あなたが書いた index.tsx を読み込む

// "root" という名前の場所に、App（ハンバーガーメニュー）を映し出す
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)