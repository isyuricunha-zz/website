const title = "Yuri Cunha";
const description = "Designer, tech enthusiast and entrepreneur of sorts";

const SEO = {
  title,
  description,
  canonical: "https://website-ten-brown.vercel.app",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://website-ten-brown.vercel.app",
    title,
    description,
    images: [
      {
        url: "https://website-ten-brown.vercel.app/static/images/banner.jpg",
        alt: title,
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@isyuricunha",
    site: "@isyuricunha",
    cardType: "summary_large_image",
  },
};

export default SEO;
