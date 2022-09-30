import styles from "./index.module.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGoogleCircle,
} from "react-icons/ai";
import logo from "./logotype_white.png";
import logo2 from "./logo_white.png";
import { Link } from "react-router-dom";

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
            <li>
              <Link className={styles.link} to="/attractions">
                Attractions
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/activities">
                Activities
              </Link>
            </li>
            <li>
              {" "}
              <Link className={styles.link} to="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.box2}>Made by Team D.</div>
    </div>
  );
};

export default Footer;
