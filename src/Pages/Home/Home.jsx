import React from "react";
import "./Home.css";
import { Link, Typography } from "@mui/material";
import photo from "../../Assets/profile.png";
import photo2 from "../../Assets/profile2.png";
import SocialMediaAcc from "../../Components/SocialMediaAcc/SocialMediaAcc";

function Home() {
  return (
    <div>
      <div className="Contaniner">
        <section className="PicRT">
          <Link href="TranslatorLandingPage">
            <img src={photo2} alt="Choose your Avatar" />
          </Link>
        </section>

        <section className="Piclft">
          <Link href="DevLandingPage">
            <img src={photo} alt="Choose your Avatar" />
          </Link>
        </section>
      </div>

      <Typography
        variant="h4"
        className="glitch"
        data-text="Choose your Avatar"
      ></Typography>
    <SocialMediaAcc/>
    </div>
  );
}

export default Home;
