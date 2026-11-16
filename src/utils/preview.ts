/** 由站点 url 推导预览图路径：https://a.b.com/x/y -> /previews/a-b-com-x-y.webp */
export function getPreviewSrc(item: { url: string; preview?: string }) {
  if (item.preview) return item.preview;
  const slug = item.url
    .replace(/^https?:\/\//, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `/previews/${slug}.webp`;
}
