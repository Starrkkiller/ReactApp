import { Button } from "../Button/Button";
import { ThemeDropdown } from "../Header/ThemeDropdown";
import { Icon } from "../Icon/Icon";
import styles from "./heading.module.css";

export const HeaderButtonChanger = () => {
  const HeaderButtonChangerIcon = <Icon name="sun"></Icon>;

  return (
    <div className={styles.themes}>
      <Button prefix={HeaderButtonChangerIcon}>Свелая тема</Button>
      <ThemeDropdown></ThemeDropdown>
    </div>
  );
};
