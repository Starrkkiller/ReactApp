import "./heading.css";
import { HeadingThemes } from "./HeadingThemes";

export const Heading = ({ title, ...props }) => (
  <div className="heading__wrapper">
    <h1>{title}</h1>
    <HeadingThemes />
  </div>
);
