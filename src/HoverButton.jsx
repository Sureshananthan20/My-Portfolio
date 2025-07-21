import { useState } from "react";

function HoverButton({ name, target_id }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    const element = document.getElementById(target_id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "Inter",
        border: "none",
        color: "#5A6C92",
        background: "none",
        padding: "8px 16px",
        fontSize: "10px",
        cursor: "pointer",
      }}
    >
      {hovered ? `- ${name}` : name}
    </button>
  );
}

export default HoverButton;
