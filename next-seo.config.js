const title = "Yuri Cunha";
const description = "Designer, tech enthusiast and entrepreneur of sorts";

const SEO = {
  title,
  description,
  canonical: "https://localhost:3000",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://localhost:3000",
    title,
    description,
    images: [
      {
        url: "https://localhost:3000/static/images/banner.jpg",
        alt: title,
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@wirtzdan",
    site: "@wirtzdan",
    cardType: "summary_large_image",
  },
};

export default SEO;
