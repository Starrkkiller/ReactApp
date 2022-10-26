import { Header } from "./components/shared/Header";
import { FilterStatic } from "./components/shared/FilterStatic";
import { FilterExtended } from "./components/shared/FilterExtended";

export const App = () => (
  <>
    <Header />
    <FilterStatic></FilterStatic>
    <FilterExtended></FilterExtended>
  </>
);
