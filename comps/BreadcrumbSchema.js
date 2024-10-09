const BreadcrumbSchema = ({ url, breadcrumbTitle, PageRatingSchema,description,reviewCount }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": "https://www.sibinfotech.com/",
          name: "Home",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `${url}`,
          name: breadcrumbTitle,
        },
      },
    ],
  };

  const PageRating = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: breadcrumbTitle,
    description: description,
    review: {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      author: { "@type": "Person", name: "Anurag Singh" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      reviewCount: reviewCount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {PageRatingSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PageRating) }}
        ></script>
      )}
    </>
  );
};

export default BreadcrumbSchema;
