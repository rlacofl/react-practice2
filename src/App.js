import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import { ThemeContext } from './context/ThemeContext';

import './App.css';

// 리액트는 싱글 웹브라우저이지만 Router를 사용하여 다중 페이지를 구현할 수 있음

function App() {
  const { mode } = useContext(ThemeContext);

  // 리액트 라우트는 최상단에 BrowserRouter -> Routes -> Route 순으로 작성해야 함
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;