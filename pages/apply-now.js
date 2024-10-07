import ApplyForm from "@/comps/applyForm";
import { CustomLayout } from "@/comps/CustomLayout";

const ApplyNow = () => {
  const metaTags = (
    <>
      <title>Apply Now at SIB Infotech | Job Application</title>
      <meta name="description" content="Submit your application at SIB Infotech and kickstart your career in the digital marketing industry. Connect with our HR Department. Apply now!" />
      <meta name="keywords" content="Job Application" />
     

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/apply-now" />
      <meta property="og:title" content="Apply Now at SIB Infotech | Job Application" />
      <meta property="og:description" content="Submit your application at SIB Infotech and kickstart your career in the digital marketing industry. Connect with our HR Department. Apply now!" />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/sib-infotech.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/apply-now" />
      <meta property="twitter:title" content="Apply Now at SIB Infotech | Job Application" />
      <meta property="twitter:description" content="Submit your application at SIB Infotech and kickstart your career in the digital marketing industry. Connect with our HR Department. Apply now!" />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/sib-infotech.png" />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <div>
        <ApplyForm />
      </div>
    </CustomLayout>
  );
};

export default ApplyNow;
