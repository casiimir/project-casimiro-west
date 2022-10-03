import styles from "./index.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { CgFormatSlash } from "react-icons/cg";

const CartPage = () => {
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
          <div className={styles.productList}></div>
          <div className={styles.infoPayment}>
            <div className={styles.price}>
              <h2>Total:</h2>
              <p>0$</p>
            </div>
            <div className={styles.productInfo}>
              <p>Activities Number: 2</p>
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
            <div className={styles.button}>
              <button>Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
