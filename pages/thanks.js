import { useEffect } from 'react';

import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Thanks() {
	const router = useRouter()

	useEffect(() => {
		const BackRouting = setTimeout(() => {
		  router.replace('/') 
		}, 3000)
	
		return () => clearTimeout(BackRouting)
	
	  }, [])
	  const metaTags = (
        <>
          <title>Thank You for Contacting Us | SIB Infotech</title>
          <meta name="description" content="Thank you for reaching out to SIB Infotech. Our digital marketing and SEO specialists will get in touch with you shortly." />
          <meta name="keywords" content="thank you, sib infotech contact" />
          <meta name="robots" content="noindex, follow" />
         
    
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.sibinfotech.com/thanks" />
          <meta property="og:title" content="Thank You for Contacting Us | SIB Infotech" />
          <meta property="og:description" content="Thank you for reaching out to SIB Infotech. Our digital marketing and SEO specialists will get in touch with you shortly." />
          <meta property="og:image" content="https://www.sibinfotech.com/assets/images/logo.png" />
    
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.sibinfotech.com/thanks" />
          <meta property="twitter:title" content="Thank You for Contacting Us | SIB Infotech" />
          <meta property="twitter:description" content="Thank you for reaching out to SIB Infotech. Our digital marketing and SEO specialists will get in touch with you shortly." />
          <meta property="twitter:image" content="https://www.sibinfotech.com/assets/images/logo.png" />
        </>
      );
      return (
        <CustomLayout meta={metaTags}>
        <section className="border-top">
		    <div className="containerFull">
		        <div className="row">
		            <div className="col-lg-10 offset-lg-1">
		                <div className="thankBlock text-center">
		                    <h3 className="large_heading fw-bold"><i className="far fa-check-circle text-success"></i></h3>
		                    <h1 className="heading my-3">Thank You !</h1>
		                    <h4 className="small_heading mb-3">Your submission is received and we will contact you soon. </h4>
		                    <Link href="/" className="mt-3"><i className="bi bi-arrow-left"></i> Back to Home</Link>
		                </div>
		            </div>
		        </div>
		    </div>
		</section>
    </CustomLayout>
  )
}
