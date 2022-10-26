import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { InputTitle } from "../common/InputTitle";
import { Dropdown } from "../common/Dropdown";

export const FilterExtended = ({ background }) => (
  <div>
    <div>
      <InputTitle>Дата оформления</InputTitle>
      <div>
        <Input></Input>
        <Input></Input>
      </div>
    </div>
    <div>
      <InputTitle>Стаус заказа</InputTitle>
      <div>
        <Input></Input>
        <Dropdown></Dropdown>
      </div>
    </div>
    <div>
      <InputTitle>Сумма заказа</InputTitle>
      <div>
        <Input></Input>
        <Input></Input>
      </div>
    </div>
    <Button>Применить</Button>
  </div>
);
