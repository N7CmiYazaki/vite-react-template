import { Hono } from "hono";

const app = new Hono()

app.get('/api/menu', (c) => {
    return c.json([
        { id: 1, label: "ホーム", icon: "🏠", color: "text-blue-600" },
        { id: 1, label: "プロフィール", icon: "👤", color: "text-gray-700" },
        { id: 1, label: "設定", icon: "⚙",color: "text-gray-700" },
        { id: 1, label: "ロブアウト", icon: "🚪", color: "text-red-500" },
    ]);
});