import { Helmet, HelmetProvider } from "react-helmet-async";
import "./DevLandingPage.css";
import AppBar from "Components/AppBar/AppBar";


function DevLandingPage() {


  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Dev Page</title>
          <meta name="description" content="The Dev Page" />
        </Helmet>
      </HelmetProvider>
      <div>
      <AppBar/>
      </div>

    </div>
  );
}

export default DevLandingPage;
