/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// speed-insights is a package that helps you measure the performance of your site
import { injectSpeedInsights } from '@vercel/speed-insights';

export const onClientEntry = () => {
  injectSpeedInsights();
};
