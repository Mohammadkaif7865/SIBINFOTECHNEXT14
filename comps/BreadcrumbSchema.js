/**
 * Emits BreadcrumbList structured data.
 *
 * This component used to emit a second block as well: a `Product` schema
 * carrying a hard-coded five-star review by an author called "Verified
 * Client", plus an aggregateRating of 4.9. That has been removed.
 *
 * Three separate problems with it:
 *  - the review was not a real review from a real person;
 *  - the rating count could not be accounted for (the site claimed 2,022
 *    ratings across every page while the Google Business Profile has 96);
 *  - service pages were typed as `Product` purely to make star ratings
 *    eligible, which is not what the type means.
 *
 * Google requires review snippets to come from reviews collected on your own
 * site, and self-serving reviews about your own business are not eligible for
 * rich results in any case. Unverifiable markup risks a manual action, which
 * would cost far more than the stars were worth.
 *
 * If you later collect genuine, verifiable first-party reviews, add them back
 * with real values and worstRating 1 - not by copying counts from Google or
 * Clutch, which cannot be marked up as your own.
 *
 * `PageRatingSchema`, `description` and `reviewCount` are still accepted so
 * the many callers passing them keep working; they are intentionally unused.
 */
const BreadcrumbSchema = ({ url, breadcrumbTitle }) => {
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default BreadcrumbSchema;
