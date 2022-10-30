import { Icon } from "./Icon";
import { Button } from "./Button";
import { ButtonHeight } from "../common/Button";
import { ButtonWidth } from "../common/Button";
import { ButtonColor } from "../common/Button";
import styles from "../../styles/heading.module.css";

export const ThemeDropdown = () => {
  const LigthThemeButtonIcon = <Icon name="sun"></Icon>;
  const DarkThemeButtonIcon = <Icon name="moon"></Icon>;

  return (
    <div className={styles.ButtonHeadingTheme_ThemeChoice}>
      <p className={styles.ButtonHeadingTheme_Title}>Выберите тему</p>
      <Button prefix={LigthThemeButtonIcon}>Светлая тема</Button>
      <Button prefix={DarkThemeButtonIcon}>Темная тема</Button>
    </div>
  );
};
