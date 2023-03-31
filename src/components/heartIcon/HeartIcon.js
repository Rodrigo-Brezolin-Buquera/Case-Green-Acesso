import styled from "styled-components"

const Icon = styled.img`
width: 30px;
height: 30px;
&:hover {
    cursor: pointer;
}
`


const HeartIcon = ({ image }) => {
    return (
        <Icon
            src={image}
        />
    )
}

export default HeartIcon