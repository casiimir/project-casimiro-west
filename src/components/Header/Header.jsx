import { useCallback, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import logo from "./logo.png";
import logotypeW from "./logo_white.png";
import logoBlack from "./logotype_white.png";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import MainInput from "../MainInput";

const Header = ({ children }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState();
  const [cartNumber, setCartNumber] = useState(0);
  const cartData = useSelector((state) => state.cart.data);

  const onHadleClick = useCallback(() => {
    document.body.style.overflow = "hidden";
    dispatch({
      type: "SET_DROPDOWN_VISIBILITY",
      payload: setActive(styles.active),
    });
  }, [dispatch]);

  const navRef = useRef(null);
  const cartObject = {
    sample: `sample`,
    tickets: "0",
  };
  useLayoutEffect(() => {
    localStorage.setItem(`Dummy`, JSON.stringify(cartObject));
    setCartNumber(
      Object.values(localStorage)
        .filter((e) => e.includes("tickets"))
        .map((item) => JSON.parse(item))
        .map((item) => Number(item.tickets))
        .reduce((previous, next) => {
          return Number(previous + next);
        })
    );
    if (
      Object.values(localStorage).filter((e) => e.includes("name")).length === 0
    ) {
      setCartNumber(0);
    }
  }, [cartData]);

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
              <Link
                className={styles.link}
                to="/"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
            </li>
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
        <section className={styles.side}>
          <MainInput />
          <div className={styles.menu} onClick={onHadleClick}>
            <RiMenu3Line />
          </div>
          <Link to="/cart" onClick={() => window.scrollTo(0, 0)}>
            <div className={styles.cart}>
              <FaShoppingCart />

              {cartNumber > 0 ? (
                <p className={styles.number}>{cartNumber}</p>
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
              window.scrollTo(0, 0);
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
              window.scrollTo(0, 0);
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
              window.scrollTo(0, 0);
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
              window.scrollTo(0, 0);
              document.body.style.overflow = "scroll";
            }}
            className={styles.link}
            to="/about"
          >
            About Us
          </Link>
        </ul>
        <Link
          to="/cart"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            document.body.style.overflow = "scroll";
          }}
        >
          <div className={styles.button}>
            <button>
              <span>Cart</span>

              <span>
                <FaShoppingCart />
                {cartNumber > 0 ? (
                  <p className={styles.number}>{cartNumber}</p>
                ) : (
                  ""
                )}
              </span>
            </button>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
