import React from "react";
import styles from "./card.module.css";
// import Envir from "./envir.png"
import Image from "next/image";

const PreviewCard = ({name,image,metadata}) => {

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__wrapper}>
          <div className={styles.scard___wrapper_acounts}>
            <div className={styles.card__score}>
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/external-smashingstocks-isometric-smashing-stocks/55/external-web-development-seo-and-marketing-smashingstocks-isometric-smashing-stocks-3.png"
                alt="external-web-development-seo-and-marketing-smashingstocks-isometric-smashing-stocks-3"
              />
            </div>
    
          </div>
        </div>
        <div className={styles.img_container}>
                <Image src={image} layout="fill" alt="" />
              </div>
        <div className={styles.card__title}>Environment Web Design</div>
        <div className={styles.card__subtitle}>
          Static Landing Page Environment Themed
          </div>
      </div>
    </>
  );
};

export default PreviewCard;
