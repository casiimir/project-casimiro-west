import { useCallback, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import logo from "./logo.png";
import logotype from "./logotype.png";

import menu from "./menu.svg";

import { useRef } from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  const { condition } = useSelector((state) => state.dropdownVisibility);
  const dispatch = useDispatch();

  const onHadleClick = useCallback(
    (e) =>
      dispatch({
        type: "SET_DROPDOWN_VISIBILITY",
        payload: !condition,
      }),
    [condition]
  );

  const navRef = useRef(null);

  return (
    <header className={styles.Header}>
      <nav ref={navRef} className={styles.navbar}>
        <section className={styles.logo}>
          <img className={styles.img} src={logo} alt="logo" />
        </section>
        <section className={styles.side}>
          {children}
          <div className={styles.menu}>
            <img
              onClick={onHadleClick}
              className={styles.img}
              src={menu}
              alt="menu"
            />
          </div>
        </section>
      </nav>
      {condition === true && (
        <div className={styles.dropdown}>
          <div className={styles.top}>
            <img className={styles.logotype} src={logotype} alt="wanderer" />
            <p onClick={()=> dispatch({
        type: "SET_DROPDOWN_VISIBILITY",
        payload: !condition,
            })}>X</p>
          </div>

          <hr />
          <ul>
            <Link className={styles.link} to="/">
              Home
            </Link>
            <Link className={styles.link} to="/">
              Experiences
            </Link>
            <Link className={styles.link} to="/">
              Cities
            </Link>
            <Link className={styles.link} to="/">
              Countries
            </Link>
            <Link className={styles.link} to="/">
              Activities
            </Link>
            <Link className={styles.link} to="/">
              About Us
            </Link>
          </ul>

          <button className={styles.button}>Cart</button>
        </div>
      )}
    </header>
  );
};

export default Header;
