import "./dropdowns.css";

export const Dropdowns = () => (
  <>
    <div className="page">
      <label>
        <p className="page__info">Номер страницы</p>
        <input
          className="page__area"
          type="number"
          placeholder="Введите номер"
        ></input>
      </label>
    </div>
    <div className="theme-choice">
      <p className="theme-choice__title">Выберите тему</p>
      <button
        type="button"
        className="button button__theme_position theme-button__theme_position"
      >
        {/* <svg viewBox="0 0 16 16" fill="#8055FF" strok="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="4" stroke="none"/>
        <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none"/>
        <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none"/>
        <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none"/>
        <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none"/>
        <path d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z" stroke="none"/>
        <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none"/>
        <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none"/>
        <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none"/>
      </svg>        */}
        Светлая
      </button>
      <button
        type="button"
        className="button button__theme_position button__theme_colored theme-button__theme_position"
      >
        {/* <svg viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="none"/>
      </svg>                       */}
        Темная
      </button>
    </div>
    <div className="delete-choice">
      <p className="delete-choice__title">Удалить n записей?</p>
      <button
        type="button"
        className="button button__theme_position delete-choice__button "
      >
        Удалить
      </button>
      <button
        type="button"
        className="button button__theme_position button__theme_colored"
      >
        Отмена
      </button>
    </div>
    <div className="type">
      <label className="type__item">
        {/* <svg viewBox="0 0 16 16" fill="#fff" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
      </svg> */}
        <input type="checkbox" className="checkbox_square"></input>
        <p className="checkbox__title">Новый</p>
      </label>
      <label className="type__item">
        {/* <svg viewBox="0 0 16 16" fill="#fff" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
      </svg> */}
        <input type="checkbox" className="checkbox_square"></input>
        <p className="checkbox__title">Расчет</p>
      </label>
      <label className="type__item">
        {/* <svg viewBox="0 0 16 16" fill="#fff" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
      </svg> */}
        <input type="checkbox" className="checkbox_square"></input>
        <p className="checkbox__title">Подтвержден</p>
      </label>
      <label className="type__item">
        {/* <svg viewBox="0 0 16 16" fill="#fff" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
      </svg> */}
        <input type="checkbox" className="checkbox_square"></input>
        <p className="checkbox__title">Отложен</p>
      </label>
      <label className="type__item">
        {/* <svg viewBox="0 0 16 16" fill="#fff" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
      </svg> */}
        <input type="checkbox" className="checkbox_square"></input>
        <p className="checkbox__title">Выполнен</p>
      </label>
      <label className="type__item">
        {/* <svg viewBox="0 0 16 16" fill="#fff" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
      </svg> */}
        <input type="checkbox" className="checkbox_square"></input>
        <p className="checkbox__title">Отменен</p>
      </label>
    </div>
    <div className="dropdowns dropdowns_circle">
      <div className="type">
        <label className="type__item">
          <input type="radio" name="radio" className="dropdowns__radio"></input>
          <p className="dropdowns__radio-title">Новый</p>
        </label>
        <label className="type__item">
          <input type="radio" name="radio" className="dropdowns__radio"></input>
          <p className="dropdowns__radio-title">Расчет</p>
        </label>
        <label className="type__item">
          <input type="radio" name="radio" className="dropdowns__radio"></input>
          <p className="dropdowns__radio-title">Подтвержден</p>
        </label>
        <label className="type__item">
          <input type="radio" name="radio" className="dropdowns__radio"></input>
          <p className="dropdowns__radio-title">Отложен</p>
        </label>
        <label className="type__item">
          <input type="radio" name="radio" className="dropdowns__radio"></input>
          <p className="dropdowns__radio-title">Выполнен</p>
        </label>
        <label className="type__item">
          <input type="radio" name="radio" className="dropdowns__radio"></input>
          <p className="dropdowns__radio-title">Отменен</p>
        </label>
      </div>
    </div>
  </>
);
