import { Button } from "../common/Button";
import { ButtonHeight } from "../common/Button";
import { ButtonWidth } from "../common/Button";
import { ButtonColor } from "../common/Button";

import { Dropdown } from "../common/Dropdown";
import { Searchbar } from "../modules/Searchbar";
import { Icon } from "../common/Icon";
import { Label } from "../common/Label";
import { InputColor, InputSize } from "../common/Input";

export const FilterExtended = ({ background }) => (
  <div>
    <Label
      size={InputSize.medium}
      color={InputColor.transparent}
      titleText={"Дата заказа"}
    ></Label>
    <Label
      size={InputSize.long}
      color={InputColor.transparent}
      titleText={"Любой"}
    ></Label>
    <Label
      size={InputSize.short}
      color={InputColor.transparent}
      titleText={"Сумма заказа"}
    ></Label>
    <Button
      width={ButtonWidth.long}
      height={ButtonHeight.big}
      color={ButtonColor.transparent}
    >
      Применить
    </Button>
  </div>
);
