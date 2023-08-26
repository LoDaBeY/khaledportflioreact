import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./DevLandingPage.css";
function DevLandingPage() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title> Dev Page</title>
          <meta name="description" content="The Dev Page" />
        </Helmet>
      </HelmetProvider>
      <div>DevLandingPage</div>
    </div>
  );
}

export default DevLandingPage;
