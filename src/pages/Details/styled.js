import styled from "styled-components"
import { colors } from "../../constants/colors";

export const DetailsCard = styled.div`
width: 320px;
min-height: 500px;
background-color: ${colors.yellow};
position: relative;
margin: 3em 0 1em 0;
padding: 170px 0.5em 0 0.5em;
border-radius: 25px;
display: flex;
flex-direction: column;
font-size: 20px;
`

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  right: 64px;
  top: -24px;
`;


