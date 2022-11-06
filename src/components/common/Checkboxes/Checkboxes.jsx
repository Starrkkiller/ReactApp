import styles from "./Checkbox.module.css";

export const Checkbox = ({ icon }) => (
  <input type="checkbox" className={styles.checkboxSquare}></input>
);

export const CheckboxRadio = () => (
  <input type="radio" className={styles.checkboxItem}></input>
);
