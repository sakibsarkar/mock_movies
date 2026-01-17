import { Metadata } from "next";

export const mainMetaData: Metadata = {
  title: "Best Movie",
  description:
    "Best Movie in this towm, hello how are you gueys, this is my description",
  icons: {
    icon: "/favicon.ico",
  },

  keywords: ["movie", "best movie"],
  authors: [
    {
      name: "Best Movie",
      url: "https://nazmul-islam-sakib.vercel.app",
    },
  ],
};
export const getPageMetaData = (
  pageName: string,
  rest: Metadata = {},
): Metadata => {
  return {
    ...mainMetaData,
    title: {
      default: `${pageName} | Best Movie`,
      template: "%s | Best Movie",
    },

    ...rest,
  };
};
