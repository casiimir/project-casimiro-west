import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import logo from "./logo.png";
import logotypeW from "./logo_white.png";
import logoBlack from "./logotype_white.png";
import MainInput from "../MainInput/";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header = ({ children }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState();

  const onHadleClick = useCallback(() => {
    document.body.style.overflow = "hidden";
    dispatch({
      type: "SET_DROPDOWN_VISIBILITY",
      payload: setActive(styles.active),
    });
  }, []);

  const { cartData } = useSelector((state) => state.cart);

  const navRef = useRef(null);

  return (
    <header className={styles.Header}>
      <nav ref={navRef} className={styles.navbar}>
        <section className={styles.logo}>
          <Link className={styles.link} to="/">
            <img className={styles.img} src={logo} alt="logo" />
            <img className={styles.img} src={logoBlack} alt="logo" />
          </Link>
        </section>
        <div className={styles.list}>
          <ul>
            <li>
              <Link className={styles.link} to="/">
                Home
              </Link>
            </li>
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
              <Link className={styles.link} to="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <section className={styles.side}>
          <MainInput />
          <div className={styles.menu} onClick={onHadleClick}>
            <RiMenu3Line />
          </div>
          <Link to="/cart">
            <div className={styles.cart}>
              <FaShoppingCart />
              {localStorage.length > 2 ? (
                cartData ? (
                  <p className={styles.number}>{cartData.length}</p>
                ) : (
                  <p className={styles.number}>
                    {
                      Object.keys(localStorage).filter(
                        (e) => !e.includes("mapbox")
                      ).length
                    }
                  </p>
                )
              ) : (
                ""
              )}
            </div>
          </Link>
        </section>
      </nav>
      <div className={`${styles.dropdown} ${active}`}>
        <div className={styles.top}>
          <img className={styles.logotype} src={logotypeW} alt="wanderer" />
          <p
            onClick={() => {
              document.body.style.overflow = "scroll";
              dispatch({
                type: "SET_DROPDOWN_VISIBILITY",
                payload: setActive(""),
              });
            }}
          >
            <AiOutlineCloseCircle />
          </p>
        </div>
        <hr />
        <ul>
          <Link
            onClick={() => {
              setActive("");
              document.body.style.overflow = "scroll";
            }}
            className={styles.link}
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setActive("");
              document.body.style.overflow = "scroll";
            }}
            className={styles.link}
            to="/attractions"
          >
            Attractions
          </Link>

          <Link
            onClick={() => {
              setActive("");
              document.body.style.overflow = "scroll";
            }}
            className={styles.link}
            to="/activities"
          >
            Activities
          </Link>
          <Link
            onClick={() => {
              setActive("");
              document.body.style.overflow = "scroll";
            }}
            className={styles.link}
            to="/about"
          >
            About Us
          </Link>
        </ul>
        <div className={styles.button}>
          <button>
            <span>Cart</span>

            <span>
              <FaShoppingCart />
              {localStorage.length > 2 ? (
                cartData ? (
                  <p>{cartData.length}</p>
                ) : (
                  <p>
                    {
                      Object.keys(localStorage).filter(
                        (e) => !e.includes("mapbox")
                      ).length
                    }
                  </p>
                )
              ) : (
                ""
              )}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
