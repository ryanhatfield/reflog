/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Reflog of a Nervous Git",
  // titleTemplate: "%s | Reflog",
  defaultTitle: "reflog",
  description: "Blog about Stuff",
  canonical: "https://reflog.ryan.bio",
  openGraph: {
    url: "https://reflog.ryan.bio",
    title: "reflog",
    description: "Blog about Stuff",
    site_name: "reflog",
  },
  twitter: {
    handle: "@nervousgit",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
