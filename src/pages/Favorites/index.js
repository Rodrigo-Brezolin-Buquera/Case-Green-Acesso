import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CharacterCard from '../../components/characterCard';
import Header from '../../components/header';
import LoadingPortal from '../../components/loadingPortal/LoadingPortal';
import { WrapContainer } from '../../components/styled/WrapContainer';
import { removeFromFavorites } from '../../store/reducers/favorites';
import { StyledH2 } from './styled';


const FavoritesPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites)

  const unFavorite = useCallback((character) => {
    dispatch(removeFromFavorites(character))
  }, [dispatch])



  return (
    <>
      <Header navigate={navigate} />
      <WrapContainer>
        {
          favorites?.length ?
            favorites?.map(i => <CharacterCard key={i.id} character={i} handler={() => unFavorite(i)} />)
            :
            <StyledH2>You don't have favorite characters</StyledH2>
        }

      </WrapContainer>
    </>
  )
}

export default FavoritesPage