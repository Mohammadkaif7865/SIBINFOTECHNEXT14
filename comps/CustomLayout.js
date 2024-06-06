import Head from "next/head";
import React from "react";

export const CustomLayout = ({ children, meta }) => {
  return (
    <>
      <Head>{meta}</Head>

      {children}
    </>
  );
};
