const BreadcrumbSchema = ({ url, breadcrumbTitle }) => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': 'https://www.sibinfotech.com/',
            name: 'Home',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id': `${url}`,
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