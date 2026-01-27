import CardIcon from "./CardIcon";
import "./Card.css";

export default function Card({ children }) {
  return (
    <div className="card-container">
      <div className="card">{children}</div>
    </div>
  );
}

Card.Icon = CardIcon;

Card.Title = function CardTitle({ children }) {
  return <h3 className="card-title">{children}</h3>;
};

Card.Description = function CardDescription({ children }) {
  return <p className="card-description">{children}</p>;
};
