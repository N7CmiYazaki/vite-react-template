import { StrictMode } from 'react'
import styles from "./Menu.mpdule.css";
import { createRoot } from 'react-dom/client'

export default function App () {
  const [menuState, setMenuState] = useState<"open" | "closed">("closed");

  return (
    <div className='p-5 text-center'>
      <h1 className='test-2xl font-bold md-4'>ハイブリッドCSSの練習</h1>

      <button
        onClick={() => setMenuState(menuState === "open" ? "closed" : "opem")}
        className='px-4 py-2 bg-blue-500 test-white rounded shadow hover:bg-blue-600 transition'
      >
        {menuState === "open" ? "閉じる" : "メニュー" }
      </button>

      {menuState === "opem" && (
        <div className={`${styles.menuBox} mt-4 p-4 bg-gray-50 rounded-lg max-w-xs mx-auto`}>
          <p className="p-2 text-blue-600 font-semibold hover:bg-gray-200 rounded corsor-pointer">
            ホーム
          </p>
          <p className="p-2 hover:bg-gray-200 rounded cursor-pointer">プロフィール</p>
          <p className="p-2 hover:bg-gray-200 rounded cursor-pointer">設定</p>
          </div>
      )}
    </div>
  );
}