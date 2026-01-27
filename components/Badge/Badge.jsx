import "./Badge.css";
import classnames from "classnames";
export default function Badge({ children, color, style }) {
  const allClasses = classnames(
    "badge",
    { "style-pill": style === "pill" },
    { "color-red": color === "red" },
    { "color-yellow": color === "yellow" },
    { "color-green": color === "green" },
    { "color-blue": color === "blue" },
    { "color-indigo": color === "indigo" },
    { "color-purple": color === "purple" },
    { "color-pink": color === "pink" },
  );
  return <span className={allClasses}>{children}</span>;
}
