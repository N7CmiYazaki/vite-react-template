import { useState, useEffect } from "react";
import styles from "./Menu.module.css";

interface MenuItem {
  id: number;
  label: string;
  icon: string;
  color: string;
}

export default function App () {
  const [menuState, setMenuState] = useState<"open" | "closed">("closed");
  const [menuItems,setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout (() => {
      const mockData: MenuItem[] = [
        { id: 1, label: "ホーム", icon: "🏠", color: "text-bule-600" },
        { id: 2, label: "プロフィール", icon: "👤", color: "text-gray-700" },
        { id: 3, label: "設定", icon: "⚙", color: "text-grau-700" },
        { id: 4, label: "ログアウト", icon: "🚪", color: "text-red-500" },
      ];
      setMenuItems(mockData);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  } , []);

  return (
    <div className="p-5 text-center font-sans">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">実務レベル:非同期処理とLoading</h1>
      <button
        onClick={() => setMenuState(menuState === "open" ? "closed" : "open")}
        className={`px-6 py-2 text-white rounded-full shadow-lg transition-all transform active:scale-95 ${
          menuState === "open" ? "bg-red-500" : "bg-blue-600"
        }`}
      >
        {menuState === "open" ? "閉じる" : "メニューを開く"}
      </button>

      {menuState === "open" && (
        <div className={`${styles.menuBox} mt-6 p-2 bg-white rounded-xl shadow-2xl max-w-xs mx-auto boeder border-gray-100 min-h-[200px] flex flex-col justify-center`}>
          {isLoading ? (
            <div className="text-gray-400 font-medium animate-pulse py-8">
              ⌛　データを読み込み中...
            </div>
          ) : (
            menuItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-3 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors group text-left"
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                <span className={`font-medium ${item.color} group-color:text-blue-700`}>
                  {item.label}
                </span>
              </div>
            ))
          )}

        </div>
      )}
    </div>
  );
}