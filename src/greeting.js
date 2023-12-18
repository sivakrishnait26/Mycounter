import { useState } from "react";
import styles from "./greet.module.css";
function Greeting() {
  const [count, setCount] = useState(0);
  increaseCount = () => setCount(count + 5);
  decreaseCount = () => setCount(count - 2);
  resetCount = () => setCount(0);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Counter</h1>
      <p className={styles.counterdes}>{count}</p>
      <button
        type="submit"
        className={styles.buttoncolor}
        onClick={increaseCount}
      >
        Increase
      </button>
      <button type="submit" className={styles.buttoncolor} onClick={resetCount}>
        reset
      </button>
      <button
        type="submit"
        className={styles.buttoncolor}
        onClick={decreaseCount}
      >
        Decrease
      </button>
    </div>
  );
}
export default Greeting;
