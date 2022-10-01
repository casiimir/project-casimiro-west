import { useCallback, useRef, useState, useEffect } from "react";
import styles from "./index.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { GET } from "../../utils/api";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

const MainInput = () => {
  const { visibility } = useSelector((state) => state.input);
  const cityData = useSelector((state) => state.cities);
  const dispatch = useDispatch();
  const [active, setActive] = useState();
  const [filterS, setFilterS] = useState("");
  const [queryActive, setQueryActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

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

  useEffect(() => {
    const onEventListener = (e) => {
      if (e.target.tagName === "DIV" && e.target.tagName !== "INPUT") {
        setActive("");
      } else if (
        e.target.tagName === "IMG" ||
        e.target.tagName === "CITE" ||
        e.target.tagName === "P" ||
        e.target.tagName === "H1" ||
        e.target.tagName === "H2" ||
        e.target.tagName === "A"
      ) {
        setActive("");
      }
    };

    window.addEventListener("click", (e) => {
      onEventListener(e);
    });

    return window.removeEventListener("click", (e) => {
      onEventListener(e);
    });
  }, []);

  const onHandleInput = (e) => {
    setInputValue(e.target.value);

    setQueryActive(true);
  };

  const search = useDispatch();
  useEffect(() => {
    if (inputValue) {
      GET("cities").then((data) =>
        setFilterS(data.filter((city) => city.code.includes(inputValue)))
      );
    }
    console.log(filterS);
  }, [inputValue]);

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
      {inputValue.length > 1 && filterS && filterS.length > 0 ? (
        <div
          className={`${styles.MainInput__filter} ${
            queryActive && styles.active
          }`}
        >
          <ul>
            {filterS?.map((cities, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <Link
                    to={`/${cities.name}`}
                    state={cityData}
                    className={styles.link}
                  >
                    {cities.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div
          className={`${styles.MainInput__filter} ${
            queryActive && styles.active
          }`}
        >
          <p>Non ci sono risultati..</p>
        </div>
      )}
    </>
  );
};

export default MainInput;
