import "./styles/specification.css";

import { Buttons } from "./components/Buttons/Buttons";
import { Checkboxes } from "./components/Checkboxes/Checkboxes";
import { Dropdowns } from "./components/Dropdowns/Dropdowns";
import { Heading } from "./components/Heading/Heading";
import { Inputs } from "./components/Input/Input";
import { Searchbar } from "./components/Searchbar/Searchbar";

function App() {
  return (
    <div>
      <section class="inputs">
        <Inputs />
      </section>
      <section class="searchbars">
        <Searchbar />
      </section>
      <section class="checkboxes">
        <Checkboxes />
      </section>
      <section class="buttons">
        <Buttons />
      </section>
      <section class="heading">
        <Heading />
      </section>
      <section class="dropdowns">
        <Dropdowns />
      </section>
    </div>
  );
}

export default App;
