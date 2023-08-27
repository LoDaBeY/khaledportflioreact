import { Helmet, HelmetProvider } from "react-helmet-async";
import "./TranslatorLandingPage.css";
import "./TranslatorLandingPageResponsive.css";
import AppBar from "Components/AppBar";

function TranslatorLandingPage() {
  return (
<div>
      <HelmetProvider>
        <Helmet>
        <title> Translator Page</title>
            <meta name="description" content="The Translator Page" />
        </Helmet>
      </HelmetProvider>
      
      <AppBar/>

</div>

  )
}

export default TranslatorLandingPage