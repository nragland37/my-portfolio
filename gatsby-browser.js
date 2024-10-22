import { injectSpeedInsights } from '@vercel/speed-insights';

export const onClientEntry = () => {
  injectSpeedInsights();
};
