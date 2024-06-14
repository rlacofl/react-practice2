import { Link } from 'react-router-dom';
import './Navbar.css';
import Searchbar from './Searchbar';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Link : 링크를 클릭하면 링크에 대한 페이지가 나옴 (링크 태그가 주소보다 더 빠름)
const Navbar = () => {
  const { color, changeColor } = useContext(ThemeContext);
  return (
    <div className="navbar" style={{ backgroundColor: color }}>
      <nav onClick={() => changeColor("pink")}>
        <Link to="/" className='brand'>
          <h1>Recipe App</h1>
        </Link>
        <Searchbar />
        <Link to="/create" className='nav-link'>
          레시피 만들기
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
