import Image from "next/image";

export default function SmoSection({
  title,
  highlightedText,
  description,
  subDescription,
  imageSrc,
  imageAlt,
  features = [],
}) {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div
              className="w-100"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={500}
                height={500}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="col-md-6">
            <h2 className="mb-3">
              {title} <strong className="text_red">{highlightedText}</strong>?
            </h2>
            <p
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <p
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: subDescription }}
            ></p>
          </div>

          {/* Features Section */}
          <div className="mt-5">
            <div className="row">
              {features.map((feature, idx) => (
                <div className="col-6 mb-4" key={idx}>
                  <div className="d-flex align-items-start feature-icon">
                    <div className="icon-box me-3">{feature.icon}</div>
                    <div>
                      <h5>{feature.title}</h5>
                      <p className="small">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
