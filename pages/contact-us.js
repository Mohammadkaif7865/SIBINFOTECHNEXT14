import ContactForm from "@/comps/ContactForm";
import { CustomLayout } from "@/comps/CustomLayout";

const Contact = () => {
  const metaTags = (
    <>
      <title>Contact SIB Infotech | Expert Digital Marketing Solutions</title>
      <meta name="description" content="Get in touch with SIB Infotech for top-notch digital marketing solutions. Our dedicated marketing team is here to help with your SEO needs. Contact us today!" />
      <meta name="keywords" content="contact" />
     
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/contact-us" />
      <meta property="og:title" content="Contact SIB Infotech | Expert Digital Marketing Solutions" />
      <meta property="og:description" content="Get in touch with SIB Infotech for top-notch digital marketing solutions. Our dedicated marketing team is here to help with your SEO needs. Contact us today!" />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/sib-infotech.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/contact-us" />
      <meta property="twitter:title" content="Contact SIB Infotech | Expert Digital Marketing Solutions" />
      <meta property="twitter:description" content="Get in touch with SIB Infotech for top-notch digital marketing solutions. Our dedicated marketing team is here to help with your SEO needs. Contact us today!" />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/sib-infotech.png" />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <div>
        <ContactForm />
      </div>
    </CustomLayout>
  );
};

export default Contact;
