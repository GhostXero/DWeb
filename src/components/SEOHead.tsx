import Head from 'next/head';
import { Metadata } from 'next';

interface SEOHeadProps extends Metadata {
  url?: string;
  type?: 'website' | 'article';
  siteName?: string;
  locale?: string;
  twitter?: {
    card?: 'summary' | 'summary_large_image';
    site?: string;
    creator?: string;
  };
  facebook?: {
    appId?: string;
  };
  additionalMetaTags?: Array<{
    name: string;
    content: string;
  }>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  url,
  type = 'website',
  siteName = 'Deber Ventilation',
  locale = 'da_DK',
  openGraph,
  twitter,
  facebook,
  additionalMetaTags = [],
}) => {
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const siteUrl = 'https://www.deberventilation.dk';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : 'WebSite',
    "name": title,
    "description": description,
    "url": currentUrl,
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.svg`
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  if (type === 'article') {
    (structuredData as any).mainEntityOfPage = {
      "@type": "WebPage",
      "@id": currentUrl
    };
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="author" content="Deber Ventilation ApS" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {openGraph?.images && (
        <>
          <meta property="og:image" content={openGraph.images[0]?.url} />
          <meta property="og:image:width" content={openGraph.images[0]?.width?.toString() || '1200'} />
          <meta property="og:image:height" content={openGraph.images[0]?.height?.toString() || '630'} />
          <meta property="og:image:alt" content={openGraph.images[0]?.alt || title} />
        </>
      )}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitter?.card || 'summary_large_image'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {twitter?.site && <meta name="twitter:site" content={twitter.site} />}
      {twitter?.creator && <meta name="twitter:creator" content={twitter.creator} />}
      
      {openGraph?.images && (
        <meta name="twitter:image" content={openGraph.images[0]?.url} />
      )}
      
      {/* Facebook App ID */}
      {facebook?.appId && <meta property="fb:app_id" content={facebook.appId} />}
      
      {/* Additional Meta Tags */}
      {additionalMetaTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#3b5370" />
      <meta name="msapplication-TileColor" content="#3b5370" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
    </Head>
  );
};

export default SEOHead;