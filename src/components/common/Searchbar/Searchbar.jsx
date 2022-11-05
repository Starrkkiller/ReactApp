import React, { useState } from "react";
import { Input } from "../Input/Input";
import { Icon } from "../Icon/Icon";
import styles from "./searchbar.module.css";

export const Searchbar = ({ children, className }) => {
  const [data, setData] = useState("");
  const iconVisibilityHandler = (e) => setData(e.target.value);
  const SearchbarClosingButton = (
    <button className={styles.btnForDelete}>
      <Icon name="xMedium"></Icon>
    </button>
  );

  return (
    <div className={styles._}>
      <Icon name="search" className={styles.icon}></Icon>
      <Input
        placeholder={"Номер заказа или ФИО"}
        className={styles._infoSearchbar}
        icon={SearchbarClosingButton}
        onChange={iconVisibilityHandler}
        value={data}
      ></Input>
      {children}
    </div>
  );
};
