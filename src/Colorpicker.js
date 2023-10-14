
import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [displayColors, setDisplayColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorPicker = () => {
    setDisplayColors(!displayColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    toggleColorPicker();
  };

  return (
    <div className="colorpicker" style={{ backgroundColor: selectedColor }}>
      <button onClick={toggleColorPicker}>Pick a Color</button>
      {displayColors && (
        <div>
          {colors.map((color, index) => (
            <div className='colorbox'
              key={index}
              style={{
                backgroundColor: color,
                width: '50px',
                height: '50px',
                display: 'inline-block',
                margin: '10px',
                cursor: 'pointer',
               
              }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}
      
    </div>
  );
};

export default ColorPicker;
