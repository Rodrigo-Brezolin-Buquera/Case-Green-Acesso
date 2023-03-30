import { memo } from 'react'
import { StyledButton } from '../styled/StyledButton'
import { Card, Avatar, BottomContainer, InfoContainer } from './styled'

const CharacterCard = ({ character, handler }) => {
  return (
    <Card>
      <InfoContainer>
        <h3>{character.name}</h3>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin}</p>
      </InfoContainer>

      <Avatar src={character.image} />
      <BottomContainer>
        <StyledButton onClick={() => handler(character)} >Adicionar a favoritos</StyledButton>
      </BottomContainer>

    </Card>
  )
}

export default memo(CharacterCard)