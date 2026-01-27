import "./Card.css";

export default function CardIcon({
  icon,
  backgroundColor = "#4f7df3",
  color = "#fff",
}) {
  return (
    <div
      className="icon"
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
    >
      {icon}
    </div>
  );
}
