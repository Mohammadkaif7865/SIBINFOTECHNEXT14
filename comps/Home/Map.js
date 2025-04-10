import Image from "next/image";
import React from "react";

const Map = () => {
  return (
    <section className="trusted">
      <h4 className="mb-4 text-center large_heading2 fontHeading2 fontWeight300 text-white">
        Across The <span className="fontWeight600">Globe Presence</span>
      </h4>
      <Image
        className="w-100 object-fit-contain"
        width={1300}
        height={400}
        src="/assets/images/map.jpg"
        alt=""
      />
    </section>
  );
};

export default Map;
