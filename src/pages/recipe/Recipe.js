import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import './Recipe.css';

// 파라미터를 useParams() 객체에서 id를 가져와 한 개의 레시피 데이터를 얻음
export default function Recipe() {
  const { id } = useParams();
  const url = 'http://localhost:3030/recipes/' + id;
  const { error, isPending, data: recipe } = useFetch(url);
  const { mode } = useContext(ThemeContext);

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>로딩중...</p>}
      {recipe && <h1>{recipe.title}</h1>}

      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p className='time'>요리시간 {recipe.cookingTime} 완성</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  );
};
