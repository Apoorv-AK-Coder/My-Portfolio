// src/analytics.js
import ReactGA from 'react-ga';

const trackingId = "UA-XXXXXXXXX-X"; // Replace with your Tracking ID
ReactGA.initialize(trackingId);

export const trackPageView = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};