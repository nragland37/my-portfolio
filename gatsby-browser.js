/* handles client-side setup for the Gatsby app. */

import { injectSpeedInsights } from '@vercel/speed-insights';

export const onClientEntry = () => {
  injectSpeedInsights();
};