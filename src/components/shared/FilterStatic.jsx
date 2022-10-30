import { Button } from "../common/Button";
import { ButtonHeight } from "../common/Button";
import { ButtonWidth } from "../common/Button";
import { ButtonColor } from "../common/Button";
import { Searchbar } from "../modules/Searchbar";
import { Icon } from "../common/Icon";
import styles from "../../styles/filterStatic.module.css";

export const FilterStatic = ({ children, type = "button" }) => {
  const FilterButtonIcon = <Icon name="filter"></Icon>;
  const RefreshButtonIcon = <Icon name="refresh"></Icon>;

  return (
    <div className={styles._}>
      <div className={styles.Searchbar}>
        <Searchbar></Searchbar>
        <Button
          width={ButtonWidth.long}
          height={ButtonHeight.big}
          color={ButtonColor.blue}
          prefix={FilterButtonIcon}
        >
          Фильтры
        </Button>
        <Button width={ButtonWidth.long} height={ButtonHeight.big}>
          Сбросить фильтры
        </Button>
      </div>
      <Button
        width={ButtonWidth.long}
        height={ButtonHeight.big}
        color={ButtonColor.transparent}
        prefix={RefreshButtonIcon}
      >
        Загрузка
      </Button>
    </div>
  );
};
