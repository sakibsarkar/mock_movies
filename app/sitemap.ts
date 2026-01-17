import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return [
    {
      url: "",
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: "/movies",
      priority: 0.9,
      lastModified: new Date(),
    },
  ].map((route) => ({
    ...route,
    url: `${siteUrl}${route.url}`,
  }));
};

export default sitemap;
