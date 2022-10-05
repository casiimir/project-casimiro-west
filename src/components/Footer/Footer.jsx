import styles from "./index.module.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import logo from "./logotype_white.png";
import logo2 from "./logo_white.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GET } from "../../utils/api";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState();
  const [activity, setActivity] = useState();

  useEffect(() => {
    GET("cities?&limit=3").then((data) =>
      dispatch({
        type: "SET_CITIESFO_DATA",
        payload: setCity(data),
      })
    );

    GET("venues?&limit=3").then((data) =>
      dispatch({
        type: "SET_ATTRACTIONSFO_MOST_DATA",
        payload: setActivity(data),
      })
    );
  }, []);

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
    {
      component: <SiTiktok />,
      name: "TikTok",
      link: "https://www.tiktok.com/",
    },
  ];

  return (
    <div className={styles.Footer}>
      <div className={styles.box}>
        <div className={styles.boxSocial}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <img src={logo2} alt="logo" />
          </div>
          <div className={styles.icons}>
            {iconData.map((icon, i) => (
              <a key={i} href={icon.link}>
                {icon.component}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.list}>
          <ul>
            <p>Top cities</p>
            {city?.map((obj, i) => (
              <Link
                key={i}
                className={styles.link}
                to={`/city/${obj.name}`}
                state={obj}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li>{obj.name}</li>
              </Link>
            ))}
          </ul>
          <ul>
            <p>Top Activities</p>
            {activity?.map((obj, i) => (
              <Link
                key={i}
                className={styles.link}
                to={`/city/${obj.name}`}
                state={obj}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li> {obj.name}</li>
              </Link>
            ))}
          </ul>
          <ul>
            <p>Pages</p>
            <li>
              <Link
                className={styles.link}
                to="/attractions"
                onClick={() => window.scrollTo(0, 0)}
              >
                Attractions
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                to="/activities"
                onClick={() => window.scrollTo(0, 0)}
              >
                Activities
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
              >
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
