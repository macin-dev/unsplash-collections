export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const upstream = await fetch(`https://unsplash.com/photos/${id}/download`);

  if (!upstream.ok || !upstream.body)
    return new Response("Not found", { status: 404 });

  return new Response(upstream.body, {
    headers: {
      "Content-Type": upstream.headers.get("content-type") ?? "image/jpeg",
      "Content-Disposition": `attachment; filename="image-${id}.jpg"`,
    },
  });
}
