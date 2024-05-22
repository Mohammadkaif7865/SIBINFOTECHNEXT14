import ApplyForm from "@/comps/applyForm";
import Head from "next/head";
import React from "react";

const ApplyNow = () => {
  return (
    <>
      <Head>
        <title>SIB Infotech | Job Application</title>
        <meta name="keywords" content="contact" />
        <meta name="description" content="contact" />
      </Head>
      <div>
        <ApplyForm />
      </div>
    </>
  );
};

export default ApplyNow;
