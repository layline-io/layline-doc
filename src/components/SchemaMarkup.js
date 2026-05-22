import React from 'react';
import Head from '@docusaurus/Head';

/**
 * SchemaMarkup component for injecting JSON-LD structured data into the page head.
 * 
 * Usage:
 *   <SchemaMarkup schema={{
 *     "@context": "https://schema.org",
 *     "@type": "FAQPage",
 *     "mainEntity": [...]
 *   }} />
 */
export default function SchemaMarkup({ schema }) {
  if (!schema) return null;

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
}
