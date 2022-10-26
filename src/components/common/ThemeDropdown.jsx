import React from "react";
import { Button } from "./Button";
import styles from "../../styles/heading.module.css";
import { Icon } from "./Icon";

export const ThemeDropdown = () => {
  const LigthThemeButtonIcon = <Icon name="sun"></Icon>;
  const DarkThemeButtonIcon = <Icon name="moon"></Icon>;

  return (
    <div className={styles.ButtonHeadingTheme_ThemeChoice}>
      <p className={styles.ButtonHeadingTheme_Title}>Выберите тему</p>
      <Button
        className={`${styles.buttonHeading} ${styles.buttonHeadingThemePosition}`}
        prefix={LigthThemeButtonIcon}
      >
        Светлая тема
      </Button>
      <Button
        className={`${styles.buttonHeading} ${styles.buttonHeadingThemePosition}`}
        prefix={DarkThemeButtonIcon}
      >
        Темная тема
      </Button>
    </div>
  );
};
