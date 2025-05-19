import rss, { pagesGlobToRssItems } from "@astrojs/rss";

interface RssContext {}

export async function GET(context: RssContext) {
  return rss({
    title: "Ученик Astro | Блог",
    description: "Мое путешествие по изучению Astro",
    site: import.meta.env.VITE_APP_PATH,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>ru-ru</language>`,
  });
}
