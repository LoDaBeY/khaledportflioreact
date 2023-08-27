import { Helmet, HelmetProvider } from "react-helmet-async";
import  '../HomeTranslatorPage/TranslatorLandingPage.css'
import  '../HomeTranslatorPage/TranslatorLandingPageResponsive.css'
function TranslatorLandingPage() {
  return (
<div>
      <HelmetProvider>
        <Helmet>
        <title> Translator Page</title>
            <meta name="description" content="The Translator Page" />
        </Helmet>
      </HelmetProvider>
      


</div>

  )
}

export default TranslatorLandingPage