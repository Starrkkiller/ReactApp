import { Checkbox } from "../Checkboxes/Checkboxes";
import { Icon } from "../Icon/Icon";
import styles from "./dropdowns.module.css";

export const DropdownLabel = ({ children, status, ...props }) => {
  const CheckboxIcon = <Icon name="check"></Icon>;
  return (
    <label className={styles.typeItem}>
      {CheckboxIcon}
      <Checkbox></Checkbox>
      <p className={styles.checkboxTitle}>{status}</p>
    </label>
  );
};
