import styles from "./index.module.scss";
import { AiOutlineClose } from "react-icons/ai";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";

import { CgFormatSlash } from "react-icons/cg";
import { useOutletContext } from "react-router-dom";

const CartPage = () => {
  const [total, setTotal] = useState([]);
  const accumulatore = useMemo(() => [""], []);
  const [cartData, setCartData] = useState(Object.values(localStorage));

  const formRef = useRef();

  // const [cartNumber] = useOutletContext();

  const [setCartNumber] = useOutletContext();

  useEffect(() => {
    Object.values(localStorage)
      .filter((e) => e.includes("name"))
      .map((item) => JSON.parse(item))
      .map((item) => accumulatore.push(Number(item.price)));
    setTotal(
      accumulatore.reduce((previous, next) => {
        return previous + next;
      })
    );
  }, [accumulatore]);

  const deleteItem = (item) => {
    localStorage.removeItem(`${item.name}@@@`);
    setCartData(cartData.filter((el, i) => el.name !== `${item.name}`));
    setCartNumber((prev) => prev - 1);
  };

  const [modalVisibility, setModalVisibility] = useState("none");
  const [updateState, setUpdateState] = useState();
  const forceUpdate = useCallback(() => setUpdateState({}), []);
  const cartCleaner = () => {
    formRef.current.reset();
    if (localStorage.length > 2) {
      formRef.current.reset();
      localStorage.clear();
      forceUpdate();
      setModalVisibility("");
      setCartNumber(0);
      setTimeout(() => {
        setModalVisibility("none");
      }, 3000);
    }
  };

  return (
    <>
      <div className={styles.ModalContainer}>
        <div className={styles.overlay}>
          <img
            src={"https://images6.alphacoders.com/338/338596.jpg?w=500"}
            alt="image"
          />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.articles}>
            <div className={styles.productList}>
              {Object.values(localStorage)

                .filter((e) => e.includes("name"))
                .map((item) => JSON.parse(item))
                .map((item, index) => (
                  <div key={index} className={styles.productListContainer}>
                    <div className={styles.productImage}>
                      <img src={item.IMG} />
                    </div>
                    <div className={styles.productInfo}>
                      <div>
                        {`${item.name}`.length >= 40 === true ? (
                          <p>{`${item.name}`.slice(0, 40)}...</p>
                        ) : (
                          <p>{item.name}</p>
                        )}
                      </div>
                      <div className={styles.productPrice}>
                        <AiOutlineClose onClick={() => deleteItem(item)} />
                        <p>{item.price}$</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className={styles.infoPayment}>
              <div className={styles.price}>
                <div className={styles.box}>
                  <h2>Total:</h2>
                  <h2>{total}$</h2>
                </div>
                <div className={styles.box2}>
                  {" "}
                  <h4>Activity number:</h4>
                  <h4>1</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.payment}>
            <div className={styles.title}>
              <h2>Payment details</h2>
            </div>
            <form ref={formRef}>
              <div className={styles.info}>
                <div className={styles.infoName}>
                  <div>
                    <h2>Card holder* </h2>
                    <input placeholder="Card holder" type="text" required />
                  </div>
                  <hr></hr>
                  <div>
                    <h2>Card number*</h2>
                    <input
                      placeholder="Card number"
                      maxlength="12"
                      type="text"
                      required
                    />
                    <hr></hr>
                  </div>
                </div>
                <div className={styles.infoNumber}>
                  <div clasname={styles.infoNumberDate}>
                    <div className={styles.infoNumberDateInput}>
                      <h2>Expiration*</h2>
                      <input
                        placeholder="MM"
                        maxlength={2}
                        type="text"
                        required
                      />
                      <CgFormatSlash />
                      <input
                        placeholder="YY"
                        maxlength={2}
                        type="text"
                        required="required"
                        pattern="[0-9]+"
                      />
                      <hr></hr>
                    </div>
                  </div>
                  <div className={styles.infoNumberCVV}>
                    <h2>CVV*</h2>
                    <input
                      placeholder="***"
                      maxLength={3}
                      type="text"
                      required
                    />
                    <hr></hr>
                  </div>
                </div>
              </div>
            </form>
            <div className={styles.button}>
              <button onClick={cartCleaner}>Buy now</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.modal} style={{ display: `${modalVisibility}` }}>
        <h3>Thanks So Much for Your Order!</h3>
      </div>
    </>
  );
};

export default CartPage;
