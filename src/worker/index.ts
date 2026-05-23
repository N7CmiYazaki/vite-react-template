// import type { D1Database, KVNamespace } from '@cloudflare/workers-types'
import { Hono } from "hono";

interface Env {
  DB: any // wrangler.jsonのd1_databasesで指定したbinding名
  KV?: any // 必要に応じて追加（使っていなければ消してもOKです）
}

const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

export default app;
