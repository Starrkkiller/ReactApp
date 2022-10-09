import "./checkboxes.css";

export const Checkboxes = () => (
  <>
    <div class="checkboxes__wrapper">
      <input
        type="radio"
        class="checkbox-example__item checkbox_circle"
      ></input>
      <div class="checkbox-example__item">
        <input type="checkbox" class="checkbox_square"></input>
      </div>
    </div>
  </>
);
