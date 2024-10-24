import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl
          defaultImage: image
        }
      }
    }
  `);

  const { defaultTitle, defaultDescription, siteUrl, defaultImage } =
    site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={title ? `${title} | ${defaultTitle}` : defaultTitle}>
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={defaultTitle} />
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {/* LinkedIn Meta Tags */}
      <meta property="og:image:alt" content={seo.description} />
      {/* Schema.org Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: seo.title,
          url: seo.url,
          description: seo.description,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/search?query={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
          image: seo.image,
        })}
      </script>
      {/* Generic Meta Tags */}
      <meta name="application-name" content={defaultTitle} />
      <meta itemProp="name" content={seo.title} />
      <meta itemProp="description" content={seo.description} />
      <meta itemProp="image" content={seo.image} />
      {/* Additional meta tags for enhanced SEO and device compatibility */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />{' '}
      {/* Adjust this value based on your site's brand color */}
      <meta name="robots" content="index, follow" />
      {/* 'expand.min.css' - replace for other styles: https://toggles.dev/ */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/theme-toggles@4.10.1/css/around.min.css"
      />
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};

export default Head;
