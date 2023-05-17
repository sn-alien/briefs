import "@styles/globals.css";
import type { AppProps } from "next/app";
import { PageContainer } from "@components/containers/PageContainer";
import { Navbar } from "@components/navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar></Navbar>
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </>
  );
}

// <PageContainer>
// <Navbar></Navbar>
// <PageWrap>
//   <Component {...pageProps} />
// </PageWrap>
// </PageContainer>
