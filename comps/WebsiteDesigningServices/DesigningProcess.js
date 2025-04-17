// import Image from "next/image";
// import React from "react";

// const DesigningProcess = () => {
//   return (
//     <section>
//       <div className="containerFull">
//         <h4 className="heading fw-bold text-center">
//           Our <span className="titleHighlight">Website Designing</span> Process
//         </h4>
//         <div className="space"></div>
//         <div className="processBlock">
//           <div className="processItem  shadow border rounded">
//             <div className="d-flex align-items-center justify-content-between">
//               <div className="iconProcess">
//                 <Image width={50} height={50} quality={100} className="w-100 h-auto "  src="/assets/images/icons/goal.png" alt="Goal" />
//               </div>
//               <h4 className="sub_heading Textnumber arrowRight">01</h4>
//             </div>
//             <h5 className="sub_heading">Goal Identification</h5>
//             <p className="mt-2">Understand your Goal</p>
//           </div>
//           <div className="processItem  shadow border rounded">
//             <div className="d-flex align-items-center justify-content-between">
//               <div className="iconProcess">
//                 <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/research.png" alt="Research" />
//               </div>
//               <h4 className="sub_heading Textnumber arrowRight">02</h4>
//             </div>
//             <h5 className="sub_heading">Research &amp; Planning</h5>
//             <p className="mt-2">Project Analysis Research &amp; Timelines</p>
//           </div>
//           <div className="processItem  shadow border rounded">
//             <div className="d-flex align-items-center justify-content-between">
//               <div className="iconProcess">
//                 <img
//                   src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/illustration.png"
//                   alt="Illustration"
//                 />
//               </div>
//               <h4 className="sub_heading Textnumber arrowRight">03</h4>
//             </div>
//             <h5 className="sub_heading">Design</h5>
//             <p className="mt-2">
//               Wireframes, Design Concepts, Mockups , Finalise
//             </p>
//           </div>
//           <div className="processItem  shadow border rounded">
//             <div className="d-flex align-items-center justify-content-between">
//               <div className="iconProcess">
//                 <img
//                   src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/web-development.png"
//                   alt="Web Development"
//                 />
//               </div>
//               <h4 className="sub_heading Textnumber pe-3 arrowDown">04</h4>
//             </div>
//             <h5 className="sub_heading">Development</h5>
//             <p className="mt-2">
//               XHTML /CSS , Coding &amp; content integration
//             </p>
//           </div>
//         </div>
//         <div className="processBlock mt-lg-4 justify-content-center">
//           <div className="processItem  shadow border rounded">
//             <div className="d-flex align-items-center justify-content-between">
//               <div className="iconProcess">
//                 <img
//                   src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/technical-support.png"
//                   alt="Technical Support"
//                 />
//               </div>
//               <h4 className="sub_heading Textnumber arrowLeft">07</h4>
//             </div>
//             <h5 className="sub_heading">Support &amp; Maintenance</h5>
//             <p className="mt-2">24 x 7 Support</p>
//           </div>
//           <div className="processItem  shadow border rounded">
//             <div className="d-flex align-items-center justify-content-between">
//               <div className="iconProcess">
//                 <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/startup.png" alt="Startup" />
//               </div>
//               <h4 className="sub_heading Textnumber arrowLeft">06</h4>
//             </div>
//             <h5 className="sub_heading">Launch</h5>
//             <p className="mt-2">Go live</p>
//           </div>
//           <div className="processItem  shadow border rounded">
//             <div className="d-flex align-items-center justify-content-between">
//               <div className="iconProcess">
//                 <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/testing.png" alt="Testing" />
//               </div>
//               <h4 className="sub_heading Textnumber arrowLeft">05</h4>
//             </div>
//             <h5 className="sub_heading">Testing &amp; Revision</h5>
//             <p className="mt-2">Testing &amp; Bug Fixing</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DesigningProcess;
import Image from "next/image";
import React from "react";

const processItems = [
  {
    icon: "/assets/images/icons/goal.png",
    number: "01",
    title: "Goal Identification",
    description: "Understand your Goal",
  },
  {
    icon: "/assets/images/icons/research.png",
    number: "02",
    title: "Research & Planning",
    description: "Project Analysis Research & Timelines",
  },
  {
    icon: "/assets/images/icons/illustration.png",
    number: "03",
    title: "Design",
    description: "Wireframes, Design Concepts, Mockups, Finalize",
  },
  {
    icon: "/assets/images/icons/web-development.png",
    number: "04",
    title: "Development",
    description: "XHTML/CSS, Coding & content integration",
  },
  {
    icon: "/assets/images/icons/testing.png",
    number: "05",
    title: "Testing & Revision",
    description: "Testing & Bug Fixing",
  },
  {
    icon: "/assets/images/icons/startup.png",
    number: "06",
    title: "Launch",
    description: "Go live",
  },
  {
    icon: "/assets/images/icons/technical-support.png",
    number: "07",
    title: "Support & Maintenance",
    description: "24 x 7 Support",
  },
];

const DesigningProcess = () => {
  return (
    <section>
      <div className="containerFull">
        <h4 className="heading fw-bold text-center fontHeading fontHeading">
          Our <span className="titleHighlight">Website Designing</span> Process
        </h4>
        <div className="space"></div>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {processItems.map((item, index) => (
            <div
              key={index}
              className="processItem m-0  shadow border b rounded"
            >
              <div className="d-flex align-items-center justify-content-between ">
                <div className="iconProcess">
                  <Image
                    width={50}
                    height={50}
                    quality={100}
                    className="w-100 h-auto"
                    src={item.icon}
                    alt={item.title}
                  />
                </div>
                <h4 className="sub_heading Textnumber ">{item.number}</h4>
              </div>
              <h5 className="sub_heading fontHeading">{item.title}</h5>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesigningProcess;
