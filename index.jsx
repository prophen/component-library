import React from "react";
import ReactDOM from "react-dom/client";
import MenuDemo from "./components/Demo/MenuDemo";
import ButtonDemo from "./components/Demo/ButtonDemo";
import BadgeDemo from "./components/Demo/BadgeDemo";
import BannerDemo from "./components/Demo/BannerDemo";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <h1>Component Library</h1>
      <p className="subtitle">
        A collection of beautiful, reusable React components
      </p>

      {/* Component Demos */}
      <MenuDemo />
      <ButtonDemo />
      <BadgeDemo />
      <BannerDemo />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
