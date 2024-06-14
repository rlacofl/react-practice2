// import { createContext, useReducer } from 'react';
const { createContext, useReducer } = require('react');


// ThemeContext 객체 생성
export const ThemeContext = createContext();

// reducer 함수 (상태, 액션을 받아서 액션 타입에 따라 상태 객체를 업데이트)
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload };

    default:
      return state;
  }
};

// provider 컴포넌트 
export function ThemeProvider({ children }) {

  const [state, dispatch] = useReducer(themeReducer, { color: '#a2d2ff', mode: 'dark' });
  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };
  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode });
  };

  return (
    // state : 상태 관리할 객체 / changeColor : 상태(색깔)를 변경할 수 있는 메서드
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}