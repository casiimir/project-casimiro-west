import { useState } from "react";
import styles from "./index.module.scss";
import { AiOutlineClose } from "react-icons/ai";

const AuthenticationModal = ({
  setAuthenticationModalVisibility,
  setOverlayButtonVisibility,
  setBuyButtonVisibility,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistrationVisible, setRegistrationVisibility] = useState(false);
  const [isLoginVisible, setLoginVisibility] = useState(true);
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const onHandleRegistration = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    setRegistrationVisibility(false);

    setLoginVisibility(true);
    setSuccess(true);
    setAlert(false);
  };

  const onHandleLogin = (e) => {
    e.preventDefault();
    if (
      username === localStorage.getItem("username") &&
      password === localStorage.getItem("password")
    ) {
      setAuthenticationModalVisibility(false);
      setOverlayButtonVisibility(false);
      setBuyButtonVisibility(true);
    } else {
      setAlert(true);
    }
  };
  return (
    <div className={styles.AuthenticationModal}>
        <span onClick={() =>setAuthenticationModalVisibility(false)} className={styles.close}><AiOutlineClose /></span>
      {isLoginVisible && (
        <section className={styles.login}>
          <h4>Please login to place your order</h4>
          <form className={styles.form} onSubmit={onHandleLogin}>
            {success && (
              <p className={styles.success}>
                Successfully registered! You can now Login with your username
                and password
              </p>
            )}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              required
              placeholder="Enter username..."
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
              placeholder="Enter password..."
            />
            <button type="submit" className={styles.button}>
              Login
            </button>
            {alert && (
              <p className={styles.alert}>
                (!) Inexistent user or wrong password. Please check your
                credentials or consider creating a new account.
              </p>
            )}
          </form>
          {!alert && <p>Don't have an Account?</p>}
          <button
            className={styles.button}
            onClick={() => {
              setRegistrationVisibility(true);
              setLoginVisibility(false);
            }}
          >
            Register
          </button>
        </section>
      )}

      {isRegistrationVisible && (
        <section className={styles.registration}>
          <h4>Create new account</h4>
          <form className={styles.form} onSubmit={onHandleRegistration}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              required
              placeholder="Enter username..."
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
              placeholder="Enter password..."
            />
            <button type="submit" className={styles.button}>
              Register
            </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default AuthenticationModal;
