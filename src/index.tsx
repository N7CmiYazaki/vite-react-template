import { useState } from 'react'; // Reactをインポート
import styles from "./Menu.module.css";

export default function App() {
  const [menuState, setMenuState] = useState<"open" | "closed">("closed");

  return (
    <div className='p-5 text-center'>
      <h1 className='text-2xl font-bold mb-4'>ハイブリッドCSSの練習</h1>

      <button
        onClick={() => setMenuState(menuState === "open" ? "closed" : "open")}
        className='px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition'
      >
        {menuState === "open" ? "閉じる" : "メニュー" }
      </button>

      {menuState === "open" && (
        <div className={`${styles.menuBox} mt-4 p-4 bg-gray-50 rounded-lg max-w-xs mx-auto text-left`}>
          <p className="p-2 text-blue-600 font-semibold hover:bg-gray-200 rounded cursor-pointer">
            ホーム
          </p>
          <p className="p-2 hover:bg-gray-200 rounded cursor-pointer">プロフィール</p>
          <p className="p-2 hover:bg-gray-200 rounded cursor-pointer">設定</p>
        </div>
      )}
    </div>
  );
}