import { DropdownItemTitle } from "./DropdownItemTitle";
import { DropdownItemInput } from "./DropdownItemInput";

export const DropdownLabel = () => (
  <label className="type__item">
    <DropdownItemInput></DropdownItemInput>
    <DropdownItemTitle>Отменен</DropdownItemTitle>
  </label>
);
