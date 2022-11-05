import React, { useState } from "react";
import { Button } from "../../common/Button/Button";
import { ButtonHeight } from "../../common/Button/Button";
import { ButtonWidth } from "../../common/Button/Button";
import { ButtonColor } from "../../common/Button/Button";
import { Searchbar } from "../../common/Searchbar/Searchbar";
import { Icon } from "../../common/Icon/Icon";
import { Label } from "../../common/Label/Label";
import { Input, InputColor } from "../../common/Input/Input";
import styles from "./filterStatic.module.css";
import classnames from "classnames";

export const FilterStatic = ({ children, type = "button" }) => {
  const FilterButtonIcon = <Icon name="filter"></Icon>;
  const RefreshButtonIcon = <Icon name="refresh"></Icon>;

  const [visibleExtendedFilter, setvisibleExtendedFilter] = useState(false);

  const [data, setData] = useState("");
  const iconVisibilityHandler = (e) => setData(e.target.value);

  return (
    <>
      <div className={styles.Filter}>
        <div className={styles.Searchbar}>
          <Searchbar></Searchbar>
          <Button
            className={styles.leftMargin}
            width={ButtonWidth.long}
            height={ButtonHeight.big}
            color={ButtonColor.blue}
            prefix={FilterButtonIcon}
            onClick={() => setvisibleExtendedFilter(!visibleExtendedFilter)}
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
        <div className={styles._}>
          <Label
            control={
              <Input
                value={data}
                onChange={iconVisibilityHandler}
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
            value={data}
            onChange={iconVisibilityHandler}
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
              <Icon name={"down"} className={styles.statusInputIcon}></Icon>
            }
          ></Label>
          <Label
            control={
              <Input
                value={data}
                onChange={iconVisibilityHandler}
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
            value={data}
            onChange={iconVisibilityHandler}
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
