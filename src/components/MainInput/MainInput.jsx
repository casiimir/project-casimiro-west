import { useCallback, useRef, useState, useEffect } from "react";
import styles from "./index.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";

const MainInput = () => {
  const { visibility } = useSelector((state) => state.input);
  const dispatch = useDispatch();
  const [active, setActive] = useState();

  const inputRef = useRef(null);

  const onHandleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({ type: "SET_INPUT_VALUE_TO_EMPTY" });
      dispatch({
        type: "SET_INPUT_VISIBILITY",
        payload: setActive(""),
      });
    },
    [dispatch]
  );

  // useEffect(() => {
  //   const onEventListener = (e) => {
  //     if (
  //       active === styles.active &&
  //       e.target.tagName !== "INPUT" &&
  //       e.target.className !== "MainInput"
  //     ) {
  //       setActive("");
  //     }
  //     // else {
  //     //   setActive(styles.active);
  //     // }

  //     console.log(e.target);
  //   };

  //   window.addEventListener("click", (e) => {
  //     onEventListener(e);
  //   });

  //   return window.removeEventListener("click", (e) => {
  //     onEventListener(e);
  //   });
  // }, [setActive]);

  const onHandleInput = (e) => {};

  return (
    <>
      <form
        className={`${styles.MainInput} ${active}`}
        onSubmit={onHandleSubmit}
      >
        <input
          className={styles.input}
          ref={inputRef}
          onChange={onHandleInput}
          type="text"
        />
        <button className={styles.search2} type="submit">
          <AiOutlineSearch />
        </button>
      </form>
      <div
        className={styles.search}
        onClick={(e) => {
          dispatch({
            type: "SET_INPUT_VISIBILITY",
            payload: setActive(styles.active),
          });
        }}
      >
        <AiOutlineSearch />
      </div>
    </>
  );
};

export default MainInput;
