import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  const url = new URL(req.url);
  const fileName = url.pathname.replace('/reports/', '');

  if (!fileName) {
    return new Response("Missing filename", { status: 400 });
  }

  const store = getStore("reports");

  if (req.method === "POST") {
    const html = await req.text();
    await store.set(fileName, html);
    return new Response(JSON.stringify({ success: true, url: `${url.origin}/reports/${fileName}` }), {
      headers: { "Content-Type": "application/json" }
    });
  }

  if (req.method === "GET") {
    const html = await store.get(fileName);
    if (!html) {
      return new Response("Report not found", { status: 404 });
    }
    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, max-age=3600" }
    });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = {
  path: "/reports/*"
};
