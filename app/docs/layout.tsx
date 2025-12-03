// app/docs/layout.tsx
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner } from "nextra/components";
import { getPageMap } from "nextra/page-map";

const banner = (
  <Banner storageKey="lazy-appwrite-release">
    Lazy Appwrite v1.0.0 is out! 🎉
  </Banner>
);

const navbar = (
  <Navbar
    logo={<span style={{ fontWeight: "bold" }}>Lazy Appwrite</span>}
    projectLink="https://github.com/Ghunter254/lazy-appwrite"
  />
);

const footer = <Footer>MIT {new Date().getFullYear()} © Lazy Appwrite.</Footer>;

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Layout
        banner={banner}
        navbar={navbar}
        pageMap={await getPageMap()}
        docsRepositoryBase="https://github.com/Ghunter254/lazy-appwrite-docs"
        footer={footer}
        sidebar={{ defaultMenuCollapseLevel: 1 }}
        editLink="Edit this page on GitHub"
      >
        {children}
      </Layout>
    </>
  );
}
