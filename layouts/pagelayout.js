"use client";
import Top from "./top";
import Left from "./left";
import Head from "next/head";
import { Inter } from 'next/font/google'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../styles/globals.css";

const myInter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: "swap",
})



export default function Layout({ children, ...pageProps }) {

  const [topShow, setTopShow] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if(pathname.includes('/dashboard') ){
      setTopShow(false);
    } else {
      setTopShow(true);
    }
  }, [])
  
  return (
    <>
      <Head>
        <title>{pageProps.pageTitle ? pageProps.pageTitle : "Loading..."} | Welcome to Hexa Erate Dashboard</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>

      {topShow === true ? 
      <Top topTab={pageProps.topTab} pageTitle={pageProps.pageTitle} pageName={pageProps.pageName} parentPageName={pageProps.parentPageName} />         
      : null
      }

        <Left />
        <div className={`${myInter.className} pl-[118px] xl:pl-[128px] pr-[32px] xl:pr-[1.667vw] pb-6 xl:pb-[1.25vw] `}>
          <main>
            {children}
          </main>
        </div>
      </>
    </>
  );
}
