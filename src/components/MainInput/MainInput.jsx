import { useCallback, useRef, useState } from "react";
import search from "./search.svg";
import styles from "./index.module.scss";

import { useDispatch, useSelector } from "react-redux";

const MainInput = () => {
  const { visibility } = useSelector((state) => state.input);
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  

  const onHandleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({ type: "SET_INPUT_VALUE_TO_EMPTY" });
      dispatch({ type: "SET_INPUT_VISIBILITY", payload: false });
    },
    [dispatch]
  );

  const onHandleInput = (e) => {
    
  };

  return (
    <>
      {!visibility && (
        <img
          onClick={() => dispatch({ type: "SET_INPUT_VISIBILITY", payload: true })}
          className={styles.search}
          src={search}
          alt="search"
        />
      )}
      {visibility && (
        <form className={styles.MainInput} onSubmit={onHandleSubmit}>
          <input
            className={styles.input}
            ref={inputRef}
            
            onChange={onHandleInput}
            type="text"
          />
          <button className={styles.button} type="submit">
            🔍︎
          </button>
        </form>
      )}
    </>
  );
};

export default MainInput;
