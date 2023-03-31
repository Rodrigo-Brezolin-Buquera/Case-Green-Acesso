import { FilterContainer, TextInput, StyledSelect } from "./styled"


const FilterInputs = ({ handleGender, handleName, handleOrigin, handleLocation, handleStatus }) => {
    return (
        <FilterContainer>
            <TextInput
                onChange={handleName}
                placeholder="Search by name"
            />

            <TextInput
                onChange={handleOrigin}
                placeholder="Search by origin"
            />
            <TextInput
                onChange={handleLocation}
                placeholder="Search by location"
            />

            <StyledSelect
                placeholder='Gender'
                onChange={handleGender}
            >
                <option value="" > All </option>

                <option value="Female" > Female </option>
                <option value="Male" > Male </option>
                <option value="Genderless" > Genderless </option>
                <option value="unknown" > Unknown </option>
            </StyledSelect>

            <StyledSelect
                placeholder='Status'
                onChange={handleStatus}
            >
                <option value="" > All </option>
                <option value="Alive" > Alive </option>
                <option value="Dead" > Dead </option>
                <option value="unknown" > Unknown </option>
            </StyledSelect>
        </FilterContainer>
    )
}




export default FilterInputs