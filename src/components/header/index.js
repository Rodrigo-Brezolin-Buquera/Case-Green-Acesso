import React from 'react'
import { goToFavoritesPage, goToMainPage } from '../../routes/coordinator'

const Header = ({navigate}) => {



  return (
    <div>
        <button onClick={()=>goToMainPage(navigate)}>
            Home
        </button>
        <button onClick={()=>goToFavoritesPage(navigate)} >
            Favoritos
        </button>

    </div>
  )
}

export default Header