import styles from "./index.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { CgFormatSlash } from "react-icons/cg";


const CartPage = () => {
  const [total, setTotal] = useState([]);
  const accumulatore = [0];
  const [cartData, setCartData] = useState(Object.values(localStorage));

 

  useEffect(() => {
    Object.values(localStorage)
      .filter((e) => e.includes("name"))
      .map((item) => JSON.parse(item))
      .map((item, index) => accumulatore.push(Number(item.price)));
    setTotal(
      accumulatore.reduce((previous, next) => {
        return previous + next;
      })
    );
  }, [accumulatore]);

  const deleteItem = (item) => {
    localStorage.removeItem(`${item.name}@@@`);
    setCartData(cartData.filter((el, i) => el.name !== `${item.name}`));
  };

  return (
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
              <h2>Total:</h2>
              <h2>{total}$</h2>
            </div>
          </div>
        </div>
        <div className={styles.payment}>
          <div className={styles.title}>
            <h2>Payment details</h2>
          </div>
          <div className={styles.info}>
            <div className={styles.infoName}>
              <div>
                <h2>Card holder* </h2>
                <input placeholder="Card holder" />
              </div>
              <hr></hr>
              <div>
                <h2>Card number*</h2>
                <input placeholder="Card number" />
                <hr></hr>
              </div>
            </div>
            <div className={styles.infoNumber}>
              <div clasname={styles.infoNumberDate}>
                <div className={styles.infoNumberDateInput}>
                  <h2>Expiration*</h2>
                  <input placeholder="MM" maxLength={2} />
                  <CgFormatSlash />
                  <input placeholder="YY" maxLength={2} />
                  <hr></hr>
                </div>
              </div>
              <div className={styles.infoNumberCVV}>
                <h2>CVV*</h2>
                <input placeholder="***" maxLength={3} />
                <hr></hr>
              </div>
            </div>
          </div>
          <div className={styles.button}>
            <button>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
