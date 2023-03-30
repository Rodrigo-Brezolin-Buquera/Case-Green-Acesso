import React from 'react'
import { goToFavoritesPage, goToMainPage } from '../../routes/coordinator'
import { StyledButton } from '../styled/StyledButton'
import { HeaderContainer } from './styled'

const Header = ({navigate}) => {



  return (
    <HeaderContainer>
        <StyledButton onClick={()=>goToMainPage(navigate)}>
            Home
        </StyledButton>
        <StyledButton onClick={()=>goToFavoritesPage(navigate)} >
            Favoritos
        </StyledButton>

    </HeaderContainer>
  )
}

export default Header