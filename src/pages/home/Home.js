import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';
import './Home.css';

const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:3030/recipes');
  return (
    <div className='home'>
      {/* 만약 에러가 있으면 표시 */}
      {/* 왼쪽이 null이 아니면 && 오른쪽에 있는 걸 표시 (왼쪽 값이 null이면 표시되지 않음) */}
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>로딩중...</p>}
      {/* {data && data.map(recipe => (
        <h2 key={recipe.id}>{recipe.title}</h2>
      ))} */}

      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;