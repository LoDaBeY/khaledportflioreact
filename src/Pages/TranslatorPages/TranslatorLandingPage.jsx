import { Helmet, HelmetProvider } from "react-helmet-async";
import "./TranslatorLandingPage.css";
import "./TranslatorLandingPageResponsive.css";

function TranslatorLandingPage() {
  return (
<div>
      <HelmetProvider>
        <Helmet>
        <title> Translator Page</title>
            <meta name="description" content="The Translator Page" />
        </Helmet>
      </HelmetProvider>
      
<div>TranslatorLandingPage</div>
</div>

  )
}

export default TranslatorLandingPage