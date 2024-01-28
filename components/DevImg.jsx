import Image from "next/image";
import "./trial.css";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} priority width="270"
        height="80" alt="" />
    </div>
  );
};

export default DevImg;
