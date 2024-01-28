import { Button } from "./ui/button";
import Link from "next/link";
import './cta.css'

const Cta = () => {
  return (
    <>
      <div className="wrapper">
        <div className="main-container">
          <div className="img-container"><img src="./cta/profile_1.png" alt="" /></div>
          <div className="title">Say Hello.</div>
          <div className="mail"><a href="mailto:worklikeakshay@gmail.com" rel="noreferrer">worklikeakshay@gmail.com ↗</a></div>
          <div className="socials">
            <a href="https://github.com/AkshayPratapSingh09"><img src="./cta/github.webp" alt="" /></a>
            <a href="https://instagram.com/ap_singh09"><img src="./cta/instagram.webp" alt="" /></a>
            <a href="https://twitter.com/AkshayPSingh09"><img src="./cta/twitter.svg" alt="" /></a>
            <a href="https://www.linkedin.com/in/akshaypratap09/"><img src="./cta/linkedin.webp" alt="" /></a>
          </div>
          <div className="footer">© Ap.Org, All Rights Reserved</div>
        </div>
      </div>
    </>
  );
};

export default Cta;
