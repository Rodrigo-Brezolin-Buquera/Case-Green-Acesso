import styled from "styled-components"
import Logo from "../../assets/Logo.png"

const Img =  styled.img`
    height: 60px;
`

const LogoImg = () => {
  return  (
    <Img src={Logo}/>
  )
}


export default LogoImg