import { Button } from "../common/Button";
import { ButtonHeight } from "../common/Button";
import { ButtonWidth } from "../common/Button";
import { ButtonColor } from "../common/Button";
import { ThemeDropdown } from "../common/ThemeDropdown";
import { Icon } from "../common/Icon";
import styles from "../../styles/heading.module.css";

export const HeaderButtonChanger = () => {
  const HeaderButtonChangerIcon = <Icon name="sun"></Icon>;

  return (
    <div className={styles.themes}>
      <Button prefix={HeaderButtonChangerIcon}>Свелая тема</Button>
      <ThemeDropdown></ThemeDropdown>
    </div>
  );
};
