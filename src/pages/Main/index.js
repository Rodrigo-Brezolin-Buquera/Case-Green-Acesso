import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CharacterCard from '../../components/characterCard/CharacterCard';
import Header from '../../components/header';
import { WrapContainer } from '../../components/styled/WrapContainer';
import { addToFavorites, getList } from '../../store/reducers/characters';



const MainPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters)

  const saveAsFavorite = useCallback((character) => {
    dispatch(addToFavorites(character))
  }, [dispatch])


  useEffect(() => {
    dispatch(getList())
  }, [])


  return (
    <>
      <Header navigate={navigate} />
      <div>MainPage</div>
      <WrapContainer>

        {characters === "carregando" ? <p>loading</p> : characters?.list?.map(i => <CharacterCard key={i.id} character={i} handler={() => saveAsFavorite(i)} />)}
      </WrapContainer>





    </>
  )
}

export default MainPage