import Head from "next/head";
import { usePathname } from "next/navigation";
import React from "react";

export const CustomLayout = ({ children, meta }) => {
  const path = usePathname();
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sib Infotech" />
        <meta name="publisher" content="Sib Infotech" />

        {meta}
        <link rel="canonical" href={`https://www.sibinfotech.com${path}`} />
      </Head>

      {children}
    </>
  );
};
