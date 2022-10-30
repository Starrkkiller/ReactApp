import styles from "../../styles/buttons.module.css";
import classnames from "classnames";

export const ButtonWidth = {
  long: "long",
  medium: "medium",
  short: "short",
};

export const ButtonHeight = {
  big: "big",
  medium: "medium",
};

export const ButtonColor = {
  blue: "blue",
  black: "black",
  transparent: "transparent",
};

export const Button = ({
  children,
  type,
  className,
  prefix,
  postfix,
  height,
  width,
  color,
  ...props
}) => {
  const buttonClassName = classnames(styles._, className, {
    [styles.long]: width === ButtonWidth.long,
    [styles.medium]: width === ButtonWidth.medium,
    [styles.short]: width === ButtonWidth.short,

    [styles.big]: height === ButtonHeight.big,
    [styles.medium]: height === ButtonHeight.medium,

    [styles.blue]: color === ButtonColor.blue,
    [styles.black]: color === ButtonColor.black,
    [styles._]: color === ButtonColor.transparent,
  });

  return (
    <button type={type} className={buttonClassName} {...props}>
      {prefix}
      {children}
      {postfix}
    </button>
  );
};
