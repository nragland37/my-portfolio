import React from 'react';
import { Helmet } from 'react-helmet';

// Injects favicons and theme color into the HTML head during server-side rendering
// Icons are rendered before the initial page load, improving SEO / UX
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <Helmet key="helmet-favicon">
      <link rel="icon" href="/favicons/favicon.ico" type="image/x-icon" />
      <link
        rel="shortcut icon"
        href="/favicons/favicon.ico"
        type="image/x-icon"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon-180x180.png"
      />
      <meta name="theme-color" content="#19f9d8" />
    </Helmet>,
  ]);
};
