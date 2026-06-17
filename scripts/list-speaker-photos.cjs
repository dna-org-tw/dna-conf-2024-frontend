// 一次性盤點工具：列出 Notion 講者資料庫中每位講者的 name 與 photo url
// 用法：node --env-file=.env scripts/list-speaker-photos.cjs
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_TOKEN });

async function queryAll(database_id) {
  const out = [];
  let cursor;
  do {
    const res = await notion.databases.query({ database_id, start_cursor: cursor });
    out.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return out;
}

const plain = (arr) => (arr || []).map((t) => t.plain_text).join("");

(async () => {
  const pages = await queryAll(process.env.NOTION_DATABASE_ID);
  const rows = pages.map((page) => {
    const p = page.properties;
    return {
      order: p.order?.number ?? 999,
      name: plain(p.name?.rich_text) || plain(p.title?.title) || "(無名)",
      photo: p["photo url"]?.url || "",
    };
  });
  rows.sort((a, b) => a.order - b.order);

  rows.forEach((r) => {
    console.log(
      `${String(r.order).padStart(3)} | ${r.name.padEnd(18)} | ${r.photo || "(無 photo url)"}`
    );
  });

  // 統計 host 分布
  const hosts = {};
  rows.forEach((r) => {
    let h = "(空)";
    try { h = new URL(r.photo).host; } catch {}
    hosts[h] = (hosts[h] || 0) + 1;
  });
  console.log(`\n共 ${rows.length} 位講者。photo url host 分布：`);
  Object.entries(hosts).forEach(([h, n]) => console.log(`  ${n.toString().padStart(3)}  ${h}`));
})().catch((e) => {
  console.error("ERROR:", e.message);
  process.exit(1);
});
