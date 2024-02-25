import React, { useEffect, useState } from "react";

export default function EasterEgging() {
  const [input, setInput] = useState([]);
  const eggCombo = 'banana';

  function showEgg() {
    document.getElementById('egg').style.display = 'block';
  }
  function hideEgg() {
    document.getElementById('egg').style.display = 'none';
  }

  useEffect(() => {
    const handleKeyDown = (kek) => {
      setInput((prevInput) => [...prevInput, kek.key].slice(-eggCombo.length));
    };

    const handleKeyUp = () => {
      if (input.join('') === eggCombo) {
        showEgg();
        setInput([]); // Reset
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [input, eggCombo]);

  return (
    <div className="egg-modal" id="egg">
      <p>Such easter egg, much modal! wow.</p>
      <button className="egg-button" onClick={() => hideEgg()}>close</button>
    </div>
  );
}