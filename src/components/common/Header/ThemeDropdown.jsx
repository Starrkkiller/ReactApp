import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";
import { ButtonHeight } from "../Button/Button";
import { ButtonWidth } from "../Button/Button";
import { ButtonColor } from "../Button/Button";
import styles from "./heading.module.css";

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
