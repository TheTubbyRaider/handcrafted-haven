// pages/_app.js

import '../styles/styles.css'; // Make sure the path to your styles.css is correct

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
