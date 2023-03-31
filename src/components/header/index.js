import React from 'react'
import { goToFavoritesPage, goToMainPage } from '../../routes/coordinator'
import LogoImg from '../logo'
import { StyledButton } from '../styled/StyledButton'
import { HeaderContainer } from './styled'

const Header = ({navigate}) => {



  return (
    <HeaderContainer>
        <LogoImg/>
        <div>
           <StyledButton onClick={()=>goToMainPage(navigate)}>
            Home
        </StyledButton>
        <StyledButton onClick={()=>goToFavoritesPage(navigate)} >
            Favoritos
        </StyledButton>

        </div>
       
    </HeaderContainer>
  )
}

export default Header