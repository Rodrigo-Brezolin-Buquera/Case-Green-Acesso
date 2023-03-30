import { memo } from 'react'

const CharacterCard = ({character, handler}) => {
  return (
    <div>
        <p>{character.name}</p>
        <p   onClick={()=> handler(character)} >Adicionar a favoritos</p>
    </div>
  )
}

export default memo(CharacterCard)