import "./Home.css";
import "./HomeResponsive.css";
import { Link, Typography } from "@mui/material";
import photo from "../../Assets/profile.png";
import photo2 from "../../Assets/profile2.png";
import SocialMediaAcc from "../../Components/SocialMediaAcc/SocialMediaAcc";
import AvatarContent from "Components/AvatarContent/AvatarContent";

function Home() {
  return (
    <>

      <div className="Contaniner">
        <section className="PicRT">
          <Link href="TranslatorLandingPage">
            <img src={photo2} alt="Choose your Avatar" className="White" />
          </Link>
        </section>

        <section className="Piclft">
          <Link href="DevLandingPage">
            <img src={photo} alt="Choose your Avatar" className="Orange" />
          </Link>
        </section>
      </div>
      

      <Typography
        variant="h4"
        className="glitch"
        data-text="Choose your Avatar"
      ></Typography>
      <div>
        <SocialMediaAcc />
      </div>
      <div className="AvatarText">
        <div className="TranslatorMood">
          <a href="TranslatorLandingPage">
          <AvatarContent TranslatorMood="Translator" DevloperMood={undefined} />
          </a>

        </div>
        <div className="DevloperMood">
          <a href="DevLandingPage">

          <AvatarContent DevloperMood="Devloper" TranslatorMood={undefined}  />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
