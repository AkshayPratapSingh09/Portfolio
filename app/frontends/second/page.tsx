import React from 'react';
import Image from 'next/image'
import styles from './ProfileCard.module.css';
import Linkedin from "./icons8-linkedin-50.png";
import Twitter from "./icons8-twitter-50.png";
import Github from "./icons8-github-64.png";
import Caller from "./caller_logo-removebg-preview.png";
import Profile from "./subject_2.jpeg";

const page = () => {
  return (
  <>
  <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <div className={styles.leftInfoContainer}>
            <Image src={Profile} width="180" height="350" alt="Subject" />
          </div>
        </div>

        <div className={styles.greenContainer}>
          <div className={styles.greenTopLeft}>
            <div className={styles.upperDetails}>
              <div className={styles.emailWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                  <g fill="none" fillRule="evenodd" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3.5 6.5v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2z" />
                    <path d="m5.5 7.5l5 3l5-3" />
                  </g>
                </svg>
                <span>Email</span>
              </div>
              <div>worklikeakshay@mail.com</div>
              <span className='span1'>
                <Image src={Caller} width="18" height="20" alt="Phone" />
                Phone
              </span>
              <span>(+91) 9045304479</span>
            </div>
          </div>
          <div className={styles.greenBottomLeft}>
            <div className={styles.lowerDetails}>
              <h3>Find me on</h3>
              <div>
              <a href="https://github.com/AkshayPratapSingh09">
                <Image src={Github} alt="GitHub" />
              </a>
              </div>
              <Image src={Linkedin} alt="LinkedIn" />
              <Image src={Twitter} alt="Twitter" />
            </div>
          </div>
        </div>
        <div className={styles.rightInfoContainer}>
          <div className={styles.circle}></div>
          <h3 className={styles.ak}>Akshay</h3>
          <h3 className={styles.pra}>Pratap Singh</h3>
          <h4>MERN-Full Stack Developer . NCR, India</h4>
          <p>
            High accomplishment and user-focused Front-end Developer adept in collaborating with UX and design teams to
            plan the technical writing and execution of functional specifications for websites and applications
          </p>
          <h3>Working with Technologies:</h3>
          <ul className={styles.techList}>
            <li>Javascript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Nextjs</li>
          </ul>
        </div>
      </div>
    </div>
  </>
  );
}

export default page