// export const Dropdown = ({ type, className }) => (
//   <div className="type">
//     <label className="type__item">
//       <DropdownItemInput></DropdownItemInput>
//                              <DropdownItemTitle>Новый</DropdownItemTitle>
//     </label>
//     <label className="type__item">
//       <DropdownItemInput></DropdownItemInput>
//                                   <DropdownItemTitle>Расчет</DropdownItemTitle>
//     </label>
//     <label className="type__item">
//       <DropdownItemInput></DropdownItemInput>
//       <DropdownItemTitle>Подтвержден</DropdownItemTitle>
//                                      </label>
//     <label className="type__item">
//       <DropdownItemInput></DropdownItemInput>
//       <DropdownItemTitle>Отложен</DropdownItemTitle>
//     </label>
//     <label className="type__item">
//       <DropdownItemInput></DropdownItemInput>
//       <DropdownItemTitle>Выполнен</DropdownItemTitle>
//     </label>
//     <label className="type__item">
//       <DropdownItemInput></DropdownItemInput>
//       <DropdownItemTitle>Отменен</DropdownItemTitle>
//     </label>
//   </div>
// );

import { DropdownLabel } from "./DropdownLabel";
import styles from "./dropdowns.module.css";

export const Dropdown = () => (
  <div className={styles.type}>
    <DropdownLabel status="Новый"></DropdownLabel>
    <DropdownLabel status="Расчет"></DropdownLabel>
    <DropdownLabel status="Подтвержден"></DropdownLabel>
    <DropdownLabel status="Отложен"></DropdownLabel>
    <DropdownLabel status="Выполнен"></DropdownLabel>
    <DropdownLabel status="Отменен"></DropdownLabel>
  </div>
);
