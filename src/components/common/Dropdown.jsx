import { DropdownItemTitle } from "./DropdownItemTitle";
import { DropdownItemInput } from "./DropdownItemInput";

export const Dropdown = ({ type, className }) => (
  <div className="type">
    <label className="type__item">
      {/* <svg viewBox="0 0 16 16" fill="#fff" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
      </svg> */}
      <DropdownItemInput></DropdownItemInput>
      <DropdownItemTitle>Новый</DropdownItemTitle>
    </label>
    <label className="type__item">
      {/* <svg viewBox="0 0 16 16" fill="#fff" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
      </svg> */}
      <DropdownItemInput></DropdownItemInput>
      <DropdownItemTitle>Расчет</DropdownItemTitle>
    </label>
    <label className="type__item">
      {/* <svg viewBox="0 0 16 16" fill="#fff" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
      </svg> */}
      <DropdownItemInput></DropdownItemInput>
      <DropdownItemTitle>Подтвержден</DropdownItemTitle>
    </label>
    <label className="type__item">
      {/* <svg viewBox="0 0 16 16" fill="#fff" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
      </svg> */}
      <DropdownItemInput></DropdownItemInput>
      <DropdownItemTitle>Отложен</DropdownItemTitle>
    </label>
    <label className="type__item">
      {/* <svg viewBox="0 0 16 16" fill="#fff" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
      </svg> */}
      <DropdownItemInput></DropdownItemInput>
      <DropdownItemTitle>Выполнен</DropdownItemTitle>
    </label>
    <label className="type__item">
      {/* <svg viewBox="0 0 16 16" fill="#fff" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
      </svg> */}
      <DropdownItemInput></DropdownItemInput>
      <DropdownItemTitle>Отменен</DropdownItemTitle>
    </label>
  </div>
);
