import { useState } from "react";
import styles from "./Menu.module.css"

const MENU_ITEMS = [
  { id: 1, label: "ホーム", icon: "🏠", color: "text-blue-600"},
  { id: 2, label: "プロフィール", icon: "👤", color: "text-gray-700"},
  { id: 3, label: "設定", icon: "⚙", color: "text-gray-700"},
  { id: 4, label: "ログアウト", icon: "🚪", color: "text-red-500"},
];

export default function App () {
  const [menuState, setMenuState] = useState<"open" | "closed">("closed");

  return (
    <div className=" p-5 text-center font-sans ">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">実務レベルの配列処理</h1>

      <button
        onClick={() => setMenuState(menuState === "open" ? "closed" : "open" )}
        className={`px-6 py-2 text-white rounded-full shadow-lg transition-all transeform active:scale-95 ${
          menuState === "open" ? "bg-red-500" : "bg-blue-600"
        } }`}
      >
        {menuState === "open" ? "閉じる" : "メニューを開く" }
      </button>

      {menuState === "open" && (
        <div className={`${styles.menuBox} mt-6 p-2 bg-white rounded-xl shadow-2xl max-w-xs mx-auto border border-gray-100`}>
          {MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-3 hover:bg-bule-50 rounded-lg cursor-pointer transition-colors group"
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              <span className={`font-medium ${item.color} group-hovor:text-bule-700`}>
                {item.label}
              </span>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}