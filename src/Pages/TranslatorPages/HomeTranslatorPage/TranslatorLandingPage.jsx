import { Helmet, HelmetProvider } from "react-helmet-async";
import AppBar from "Components/AppBar/AppBar";
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
      
      <AppBar/>

</div>

  )
}

export default TranslatorLandingPage