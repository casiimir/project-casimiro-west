import styles from "./index.module.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGoogleCircle,
} from "react-icons/ai";
import logo from "./logotype_white.png";
import logo2 from "./logo_white.png";

const Footer = () => {
  const iconData = [
    {
      component: <AiFillFacebook />,
      name: "Facebook",
      link: "https://www.facebook.com/",
    },
    {
      component: <AiFillInstagram />,
      name: "Instagram",
      link: "https://www.instagram.com/",
    },
    {
      component: <AiOutlineTwitter />,
      name: "Twitter",
      link: "https://twitter.com/",
    },
    {
      component: <AiFillGoogleCircle />,
      name: "Google",
      link: "https://www.google.com/",
    },
  ];

  return (
    <div className={styles.Footer}>
      <div className={styles.box}>
        <div className={styles.icons}>
          {iconData.map((icon, i) => (
            <a key={i} href={icon.link}>
              {icon.component}
            </a>
          ))}
        </div>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <img src={logo2} alt="logo" />
        </div>
        <div className={styles.list}>
          <ul>
            <li>Experiences</li>
            <li>Countries</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <div className={styles.box2}>Made by Team D.</div>
    </div>
  );
};

export default Footer;
