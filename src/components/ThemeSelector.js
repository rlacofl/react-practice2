import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './ThemeSelector.css';
import modeIcon from '../assets/mode-icon.svg';

const themeColors = ['#a2d2ff', '#ffafcc', '#cdb4db'];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useContext(ThemeContext);

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark');
    console.log(mode);
  };

  return (
    <div className="theme-selector">
      <div className='mode-toggle'>
        <img src={modeIcon} onClick={toggleMode} alt="색상 전환"
          style={{ filter: mode === 'dark' ? 'invert(100%' : 'invert(20%)' }} />
      </div>

      <div className="theme-buttons">
        {themeColors.map(color => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;