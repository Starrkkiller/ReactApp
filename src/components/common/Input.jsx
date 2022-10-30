import styles from "../../styles/input.module.css";
import classnames from "classnames";

export const InputSize = {
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
  size,
  color,
  placeholder,
  value,
  ...props
}) => {
  const inputClassName = classnames(styles._, className, {
    [styles.long]: size === InputSize.long,
    [styles.medium]: size === InputSize.medium,
    [styles.short]: size === InputSize.short,

    [styles.blue]: color === InputColor.blue,
    [styles.red]: color === InputColor.red,
    [styles.transparentInput]: color === InputColor.transparent,
  });

  return (
    <input
      className={inputClassName}
      type={type}
      placeholder={placeholder}
      value={value}
    ></input>
  );
};
