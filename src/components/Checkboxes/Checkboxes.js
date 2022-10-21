import "./checkboxes.css";

export const Checkboxes = () => (
  <>
    <div className="checkboxes__wrapper">
      <input
        type="radio"
        className="checkbox-example__item checkbox_circle"
      ></input>
      <div className="checkbox-example__item">
        <input type="checkbox" className="checkbox_square"></input>
      </div>
    </div>
  </>
);
