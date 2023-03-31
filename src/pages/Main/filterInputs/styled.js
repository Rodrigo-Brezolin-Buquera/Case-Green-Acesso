import styled from "styled-components"
import { colors } from "../../../constants/colors"

export const FilterContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   width: 95%;
   min-height: 80px;
   background-color: ${colors.green};
   border-radius: 20px;
   gap: 1em;
`

export const TextInput = styled.input`
  min-width: 50px;
  min-height: 25px;
  background-color: white;
  border: 0;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

export const StyledSelect = styled.select`
  min-width: 50px;
  min-height: 25px;
  background-color: white;
  border: 0;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;