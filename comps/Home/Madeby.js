import React from "react";
import dynamic from 'next/dynamic';

const WorkWebdesign = dynamic(() => import("../WorkWebdesign"));


const Madeby = () => {
  return (
    <section className="bgGrey  overflowHidden position-relative">
      <WorkWebdesign />
    </section>
  );
};

export default Madeby;
