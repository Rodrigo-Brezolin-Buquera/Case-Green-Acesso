import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CharacterCard from '../../components/characterCard/CharacterCard';
import Header from '../../components/header';
import { removeFromFavorites } from '../../store/reducers/favorites';


const FavoritesPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites)

  const unFavorite = useCallback((character) => {
    dispatch(removeFromFavorites(character))
  }, [dispatch])
  console.log(favorites)
  return (
    <>
      <Header navigate={navigate} />

      <div>FavoritesPage</div>

      <div>
        {favorites?.length && favorites?.map(i => <CharacterCard key={i.id} character={i} handler={() => unFavorite(i)} />)}

      </div>



    </>
  )
}

export default FavoritesPage