export async function onRequestGet(context) {
  const { params, env } = context;
  const fileName = params.path.join('/');

  if (!fileName) {
    return new Response("Missing filename", { status: 400 });
  }

  const html = await env.REPORTS_KV.get(fileName);

  if (!html) {
    return new Response("Report not found", { status: 404 });
  }

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

export async function onRequestPost(context) {
  const { request, params, env } = context;
  const fileName = params.path.join('/');

  if (!fileName) {
    return new Response("Missing filename", { status: 400 });
  }

  const html = await request.text();
  await env.REPORTS_KV.put(fileName, html);

  const url = new URL(request.url);
  return new Response(JSON.stringify({
    success: true,
    url: `${url.origin}/reports/${fileName}`
  }), {
    headers: { "Content-Type": "application/json" }
  });
}
