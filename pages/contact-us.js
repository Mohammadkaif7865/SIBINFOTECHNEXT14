import ContactForm from "@/comps/ContactForm";
import Head from "next/head";
import React from "react";

const Contact = () => {
  return (
    <>
      <Head>
        <title>SIB Infotech | Contact Us</title>
        <meta name="keywords" content="contact" />
        <meta name="description" content="contact" />
      </Head>
      <div>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
