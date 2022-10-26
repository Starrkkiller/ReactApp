import { Button } from "./Button";
import { ThemeDropdown } from "./ThemeDropdown";
import styles from "../../styles/heading.module.css";
import { Icon } from "./Icon";

export const HeaderButtonChanger = () => {
  const HeaderButtonChangerIcon = <Icon name="sun"></Icon>;

  return (
    <div className={styles.themes}>
      <Button className={styles.buttonHeading} prefix={HeaderButtonChangerIcon}>
        Свелая тема
      </Button>
      <ThemeDropdown></ThemeDropdown>
    </div>
  );
};
