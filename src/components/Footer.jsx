import React, { useState } from 'react';
export default function Footer() {
  const [color, setColor] = useState("rgba(0, 0, 0, 0.1)");
  const changeBgColor = () => {
    setColor(bgColor => bgColor = "#" + Math.floor(Math.random() * 16777215).toString(16))
  };

  return (
    <div className="footerdiv" onClick={changeBgColor} style={{ backgroundColor: color }}>
      Lefuden was here 2024
    </div>
  );
}