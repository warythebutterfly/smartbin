import { Fragment } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { DM_Sans } from "next/font/google";
import type { AppProps } from "next/app";
import { ExitPreviewButton, PreviewProvider } from "@/components/sanity";

export interface SharedPageProps {
  preview: boolean;
  previewToken: string;
}

const dmSans = DM_Sans({ subsets: ["latin"] });

import "@/styles/globals.css";

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { preview, previewToken } = pageProps;
  const { pathname } = useRouter();

  const page = !pathname.startsWith("/studio") ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component {...pageProps} />
  );

  return (
    <Fragment>
      <style jsx global>
        {`
          :root {
            --font-inter: ${dmSans.style.fontFamily};
          }
        `}
      </style>

      {preview && previewToken ? (
        <PreviewProvider previewToken={previewToken}>
          {page}
          <ExitPreviewButton />
        </PreviewProvider>
      ) : (
        page
      )}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-786HQKFBXZ"
      ></Script>
      <Script id="load-gtag">
        {`  
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-786HQKFBXZ');
        `}
      </Script>
    </Fragment>
  );
}
