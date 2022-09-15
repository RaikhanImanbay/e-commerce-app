import styled from 'styled-components';

const Container = styled.div`
    height: 25px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    padding-top: 15px;
`

function Annoucement() {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over $50
        </Container>
    )
}

export default Annoucement