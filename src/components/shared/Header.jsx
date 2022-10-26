import { HeaderButtonChanger } from "../common/HeaderButonChanger";
import { HeaderTitle } from "../common/HeaderTitle";
import styles from "../../styles/heading.module.css";

export const Header = () => (
  <div className={styles.headingWrapper}>
    <HeaderTitle title="Список заказов" />
    <HeaderButtonChanger></HeaderButtonChanger>
  </div>
);
