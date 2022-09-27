/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Reflog of a Nervous Git",
  // titleTemplate: "%s | Reflog",
  defaultTitle: "reflog",
  description: "Blog about Stuff",
  canonical: "https://blog.ryan.bio",
  openGraph: {
    url: "https://reflog.pages.dev",
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
