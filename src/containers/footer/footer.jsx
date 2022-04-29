import React from "react";
import "./footer.css";

const socials = [
  {
    name: "Sabrina Babakulova",
    telegram: "https://t.me/getrektttt",
    instagram: "https://www.instagram.com/sabrina_smthelse/",
  },
  {
    name: "Ann Khriptchenko",
    telegram: "https://t.me/Anny_45321",
    instagram: "https://www.instagram.com/_annabelle_v/",
  },
  {
    name: "Shavkat SHokirjonov",
    telegram: "https://t.me/shokirjonov_shavkat",
    instagram: "https://www.instagram.com/elbafkingdom/",
  },
  {
    name: "Vensan Drot",
    telegram: "https://t.me/VensanDrot",
    instagram: "https://www.instagram.com/vens_12.06/",
  },
];

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-links">
        {socials.map((each, key) => (
          <div className="gpt3__footer-links_div" key={key}>
            <h4>{each.name}</h4>
            <a href={each.telegram} target="_blank" rel="noreferrer">
              <p> Telegram</p>
            </a>
            <a href={each.instagram} target="_blank" rel="noreferrer">
              <p> Instagram</p>
            </a>
          </div>
        ))}
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2022 AE project</p>
      </div>
    </div>
  );
};

export default Footer;
