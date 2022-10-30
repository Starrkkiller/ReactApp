import { Input } from "../common/Input";
import { Icon } from "../common/Icon";
import styles from "../../styles/searchbar.module.css";

export const Searchbar = ({ children, className }) => {
  // const SearchbarClosingIcon = <Icon name="xMedium"></Icon>;

  return (
    <div className={styles._}>
      <Icon name="search" className={styles.icon}></Icon>
      <Input
        placeholder={"Номер заказа или ФИО"}
        className={styles._info}
      ></Input>
      {children}
    </div>
  );
};
