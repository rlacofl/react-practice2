import './Search.css';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';

import React from 'react';
import './Search.css';


const Search = () => {

  // 주소
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');  // q로 전달되는 파라미터

  // 서버로 검색하기 위한 주소
  const url = 'http://localhost:3030/recipes?q=' + query;
  const { data, isPending, error } = useFetch(url);

  // // 검색어와 일치하는 레시피를 필터링
  // const filteredRecipes = data ? data.filter(recipe =>
  //   recipe.title.toLowerCase().includes(query) ||
  //   recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query)) ||
  //   recipe.method.toLowerCase().includes(query)
  // ) : [];

  return (
    <div>
      <h2 className='page-title'>"{query}"를 포함하는 레시피는</h2>
      {/* {filteredRecipes && <RecipeList recipes={filteredRecipes} />} */}
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>로딩중...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;
