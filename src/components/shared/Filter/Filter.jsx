import React, { useState } from "react";
import { Button } from "../../common/Button/Button";
import { ButtonHeight } from "../../common/Button/Button";
import { ButtonWidth } from "../../common/Button/Button";
import { ButtonColor } from "../../common/Button/Button";
import { Searchbar } from "../../common/Searchbar/Searchbar";
import { Icon } from "../../common/Icon/Icon";
import { Label } from "../../common/Label/Label";
import { Input } from "../../common/Input/Input";
import { Dropdown } from "../../common/Dropdown/Dropdown";
import styles from "./filter.module.css";

export const Filter = ({ children, type = "button" }) => {
  const FilterButtonIcon = <Icon name="filter"></Icon>;
  const RefreshButtonIcon = <Icon name="refresh"></Icon>;

  const [visibleExtendedFilter, setVisibleExtendedFilter] = useState(false);
  const [visibleExtendedStatusDropdown, setVisibleExtendedStatusDropdown] =
    useState(false);

  const [dateFrom, setDateFrom] = useState("");
  const dateFromIcon = (e) => setDateFrom(e.target.value);

  const [dateTo, setdateTo] = useState("");
  const dateFromToIcon = (e) => setdateTo(e.target.value);

  const [sumFrom, setsumFrom] = useState("");
  const sumFromIcon = (e) => setsumFrom(e.target.value);

  const [sumTo, setsumTo] = useState("");
  const sumToIcon = (e) => setsumTo(e.target.value);

  return (
    <>
      <div className={styles.static}>
        <div className={styles.Searchbar}>
          <Searchbar></Searchbar>
          <Button
            className={styles.leftMargin}
            width={ButtonWidth.long}
            height={ButtonHeight.big}
            color={ButtonColor.blue}
            prefix={FilterButtonIcon}
            onClick={() => setVisibleExtendedFilter(!visibleExtendedFilter)}
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
      {visibleExtendedFilter ? (
        <div className={styles.extended}>
          <Label
            control={
              <Input
                value={dateFrom}
                onChange={dateFromIcon}
                className={styles.dateFromInput}
                type={"number"}
                placeholder={"12.12.2022"}
                prefix={"c"}
                icon={
                  <button>
                    <Icon
                      name={"xMedium"}
                      className={styles.dateInputFromIcon}
                    ></Icon>
                  </button>
                }
              ></Input>
            }
            titleText={"Дата заказа"}
          ></Label>
          <Input
            value={dateTo}
            onChange={dateFromToIcon}
            className={styles.dateToInput}
            type={"number"}
            placeholder={"12.12.2022"}
            prefix={"по"}
            icon={
              <button>
                <Icon
                  name={"xMedium"}
                  className={styles.dateInputToIcon}
                ></Icon>
              </button>
            }
          ></Input>
          <Label
            control={
              <Input
                className={styles.statusInput}
                placeholder={"Любой"}
              ></Input>
            }
            titleText={"Статус заказа"}
            postfix={
              <button
                className={styles.statusInputIcon}
                onClick={() =>
                  setVisibleExtendedStatusDropdown(
                    !visibleExtendedStatusDropdown
                  )
                }
              >
                <Icon name={"down"}></Icon>
              </button>
            }
          >
            {!visibleExtendedStatusDropdown ? <Dropdown></Dropdown> : null}
          </Label>
          <Label
            control={
              <Input
                value={sumFrom}
                onChange={sumFromIcon}
                className={styles.priceFromInput}
                type={"number"}
                placeholder={"6000"}
                prefix={"от"}
                icon={
                  <button>
                    <Icon
                      name={"xMedium"}
                      className={styles.sumInputFromIcon}
                    ></Icon>
                  </button>
                }
              ></Input>
            }
            titleText={"Сумма заказа"}
          ></Label>
          <Input
            value={sumTo}
            onChange={sumToIcon}
            className={styles.priceToInput}
            type={"number"}
            placeholder={"70000"}
            prefix={"до"}
            icon={
              <button>
                <Icon name={"xMedium"} className={styles.sumInputToIcon}></Icon>
              </button>
            }
          ></Input>
          <Button
            width={ButtonWidth.long}
            height={ButtonHeight.big}
            color={ButtonColor.transparent}
          >
            Применить
          </Button>
        </div>
      ) : null}
    </>
  );
};
