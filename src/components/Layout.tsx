"use client";
import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Prefooter from "./Prefooter";
import ScrollToTopButton from "./ScrollToTopButton";

const Layout = (props: any) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "The Flock Of Christ",
    description: `The Flock Of Christ, is an organization committed to embracing the essence of early church believers.`,
    image: "/images/seo/The Fock Of Christ.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div className="min-w-[350px] dark:bg-[#131921] overflow-x-hidden">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.theflockofchrist.org/${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>

      <main id="skip" className="bg-white dark:bg-[#131921]">
        <Navbar />
        {children}
        <Prefooter />
        <Footer />
        <ScrollToTopButton />
      </main>
    </div>
  );
};

export default Layout;
