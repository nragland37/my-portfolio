// speed-insights is a package that helps you measure the performance of your site

/*
import { injectSpeedInsights } from '@vercel/speed-insights';

export const onClientEntry = () => {
  injectSpeedInsights();
};
*/

// Clean up service workers on update
export const onServiceWorkerUpdateReady = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister();
      });
    });
  }
};
