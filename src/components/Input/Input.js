import "./input.css";

export const Inputs = () => (
  <>
    <div className="inputs__wrapper">
      <div className="input__parameters">
        <label className="input__info">
          Дата и время заказа
          <input
            className="input__area"
            type="number"
            placeholder="Введите"
          ></input>
        </label>
      </div>
      <div className="input__parameters input__parameters_closing">
        <label className="input__info">
          Дата и время заказа
          <input
            className="input__area"
            type="number"
            placeholder="Введите"
          ></input>
          <button type="button" className="input__btn">
            {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" stroke="#BAD8F5"/>
          </svg>                   */}
          </button>
        </label>
      </div>
      <div className="input__parameters input__parameters_locked">
        <label className="input__info">
          Дата и время заказа
          <input
            className="input__area  input__parameters_disabled"
            type="number"
            placeholder="12.12.2022"
          ></input>
        </label>
      </div>
    </div>
  </>
);
