import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const WEBSITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

  const allowList = ["/", "/movies"];

  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: allowList,
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        allow: allowList,
      },
      {
        userAgent: ["*"],
        allow: allowList,
      },
    ],
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  };
}
