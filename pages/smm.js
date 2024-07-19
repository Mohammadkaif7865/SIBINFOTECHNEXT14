import Marketing from '@/comps/MarketingPage/Marketing'
import React from 'react'
import { Helmet } from 'react-helmet-async'

const Smm = () => {
  return (
    <div>
        <Helmet>
            <title>SMM</title>
            <meta name="keywords" content=""/>
            <meta name="description" content="SIB Infotech's search engine marketing services, offer you the ideal way to increase search engine visibility via white hat organic SEM Services and PPC Campaign management as well as Paid Search Engine Inclusion"/>
        </Helmet>
        <Marketing/>

    </div>
  )
}

export default Smm