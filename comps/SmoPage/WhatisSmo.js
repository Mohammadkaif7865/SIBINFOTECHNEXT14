import Image from "next/image";
import { FaStar, FaWater, FaChartLine, FaUsers, FaBullhorn, FaHandshake } from "react-icons/fa"; // react-icons se icons import

export default function Home() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className="w-100" style={{ maxWidth: "500px", margin: "0 auto" }}>
              <Image
                src="/assets/images/cta2/WhatisSmo.png"
                alt="Team Working"
                width={500}
                height={500}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <h2 className="mb-3">What is Social Media Optimization (SMO)?</h2>
            <p className="mb-4">
              Social Media Optimization is the process of enhancing your brand’s presence on social platforms through strategic content, profile enhancement, and engagement. It helps increase visibility, generate quality leads, and build lasting relationships with your audience – all organically and cost-effectively.
            </p>
            <p className="mb-4">
              Social Media Optimization involves the use of social media networks to manage and grow an organization’s message and online presence. As a vital part of digital marketing, SMO goes beyond posting content. It includes strategically creating, curating, and promoting your brand's message on social platforms to drive engagement, increase followers, and convert social interactions into measurable business outcomes.
            </p>
          </div>

          {/* Features */}
          <div className="mt-5">
            <div className="row">
              {/* Feature 1 */}
              <div className="col-6 mb-4">
                <div className="d-flex align-items-start feature-icon">
                  <div className="icon-box">
                    <FaChartLine />
                  </div>
                  <div>
                    <h5>Brings traffic and establishes trust</h5>
                    <p className="small">
                      We are crafting a digital method that subsists life across all mediums.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-6 mb-4">
                <div className="d-flex align-items-start feature-icon">
                  <div className="icon-box">
                    <FaUsers />
                  </div>
                  <div>
                    <h5>Brand development and promotion</h5>
                    <p className="small">
                      We believe in innovation by integrating primary with elaborate ideas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="col-6 mb-4">
                <div className="d-flex align-items-start feature-icon">
                  <div className="icon-box">
                    <FaWater />
                  </div>
                  <div>
                    <h5>Maximum reachability in Minimum investment</h5>
                    <p className="small">
                      We are crafting a digital method that subsists life across all mediums.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="col-6 mb-4">
                <div className="d-flex align-items-start feature-icon">
                  <div className="icon-box">
                    <FaStar />
                  </div>
                  <div>
                    <h5>Find out new customers</h5>
                    <p className="small">
                      We believe in innovation by integrating primary with elaborate ideas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="col-6 mb-4">
                <div className="d-flex align-items-start feature-icon">
                  <div className="icon-box">
                    <FaBullhorn />
                  </div>
                  <div>
                    <h5>Advertise the business, products, and services</h5>
                    <p className="small">
                      We are crafting a digital method that subsists life across all mediums.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="col-6 mb-4">
                <div className="d-flex align-items-start feature-icon">
                  <div className="icon-box">
                    <FaHandshake />
                  </div>
                  <div>
                    <h5>Brand Recognition and Trust</h5>
                    <p className="small">
                      We believe in innovation by integrating primary with elaborate ideas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
