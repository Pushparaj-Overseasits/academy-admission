/*eslint-disable*/
import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import StudentAdmission from "components/users/StudentAdmission";
import Footer from "components/Footers/Footer.js";
import Header from "components/users/Header.jsx";

export default function Index() {
  return (
    <>
     
       <section className=" bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap  pt-3">
            <Header/>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center   rounded-lg -mt-64 py-8 px-10 relative z-10">
          <StudentAdmission/>
           </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
