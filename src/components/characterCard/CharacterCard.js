import { memo } from 'react'
import { useLocation } from 'react-router-dom'
import { colors } from '../../constants/colors'
import HeartIcon from '../heartIcon/HeartIcon'
import { StyledButton } from '../styled/StyledButton'
import { Card, Avatar, BottomContainer, InfoContainer } from './styled'
import EmptyHeart from "../../assets/EmptyHeart.svg"
import Heart from "../../assets/Heart.svg"

const CharacterCard = ({ character, handler }) => {
  let location = useLocation()

  return (
    <Card>
      <InfoContainer>
        <h2>{character.name}</h2>
      </InfoContainer>

      <Avatar src={character.image} />
      <BottomContainer>

        {
          location.pathname === "/favorites" ?
            <div onClick={() => handler(character)}>
              <HeartIcon image={Heart} />
            </div>

            :
            <div onClick={() => handler(character)}>
              <HeartIcon image={EmptyHeart} />
            </div>
        }

      </BottomContainer>

    </Card>
  )
}

export default memo(CharacterCard)