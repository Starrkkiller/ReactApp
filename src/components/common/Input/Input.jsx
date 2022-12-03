import React, { useState } from "react";
import styles from "./input.module.css";
import classnames from "classnames";
export const InputWidth = {
  long: "long",
  medium: "medium",
  short: "short",
};

export const InputColor = {
  blue: "blue",
  red: "red",
};

export const Input = ({
  children,
  type,
  className,
  prefix,
  postfix,
  color,
  placeholder,
  value,
  icon,
  iconType,
  iconClassName,
  onChange,
  ...props
}) => {
  const inputClassName = classnames(styles._, className, {
    [styles.blue]: color === InputColor.blue,
    [styles.red]: color === InputColor.red,
    [styles.transparentInput]: color === InputColor.transparent,
  });

  const [sum, setSum] = useState("");

  return (
    <div className={styles.inputContainer}>
      {prefix && <div className={styles.prefix}>{prefix}</div>}
      <input
        className={inputClassName}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
      {!!value && icon}
    </div>
  );
};
