import React from 'react'
import styles from './third.module.css';
import Image from 'next/image';
import ecoLogo from './eco-logo.png'; // Adjust the path to your image
import snapchatLogo from './snapchat.png';
import instaLogo from './insta.png';
import whatsappLogo from './whatsapp.png';
import ecoImage from './eco-image.png';

const page = () => {
  return (
  <>
  <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <Image src={ecoLogo} width={35} height={35} alt="Eco Logo" />
          <ul className={styles.navList}>
            <li className={styles.navItem}>HOME</li>
            <li className={styles.navItem}>ABOUT</li>
            <li className={styles.navItem}>HISTORY</li>
            <li className={styles.navItem}>SALE</li>
            <li className={styles.navItem}>CONTACT</li>
          </ul>
          <div className={styles.ham}>
            <i className="gg-menu-right-alt"></i>
          </div>
        </div>
        <div className={styles.lower}>
          <div className={styles.left}>
            <div className={styles.circleContainer}>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.social}>
              <Image src={snapchatLogo} alt="Snapchat" />
              <Image src={instaLogo} alt="Instagram" />
              <Image src={whatsappLogo} alt="WhatsApp" />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.upperHead}>
              <h1 className={styles.heading1}>Pollution</h1>
              <h2 className={styles.heading2}>Free Environment</h2>
              <button className='btn'>Read More</button>
            </div>
            <div className={styles.lowerHead}>
              <div className={styles.env}>
                <h3>Our Environment</h3>
                <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis quaerat qui delectus possimus eius, nemo, fuga repellat corporis voluptatum nobis in ullam. Iste voluptates eaque dolorum</p>
              </div>
              <div className={styles.story}>
                <h3>Our Story</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum ab ducimus incidunt itaque repudiandae culpa architecto blanditiis deserunt sequi nostrum optio eligendi labore soluta praesentium reprehenderit</p>
              </div>
            </div>
          </div>
          <Image id="planet" src={ecoImage} width={450} height={400} alt="Eco Image" />
        </div>
      </div>
    </div>
  </>
  )
}

export default page