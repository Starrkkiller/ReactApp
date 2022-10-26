import { Input } from "../common/Input";
import { Button } from "../common/Button";

export const FilterStatic = ({ children }) => (
  <div>
    <Input />
    <Button>Фильтры</Button>
    <Button>Сбросить фильтры</Button>
    <Button>Загрузка</Button>
  </div>
);
