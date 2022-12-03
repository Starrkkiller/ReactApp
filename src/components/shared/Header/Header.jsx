import { HeaderButtonChanger } from "../../common/Header/HeaderButonChanger";
import styles from "../../common/Header/heading.module.css";

export const Header = () => (
  <div className={styles.headingWrapper}>
    <h1>Список заказов</h1>
    <HeaderButtonChanger className={styles.themes}></HeaderButtonChanger>
  </div>
);
