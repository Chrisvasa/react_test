import styled from "styled-components";

const Test2 = () => {
    return (
        <>
            <ContentContainer>
                <h1>Test 2</h1>
            </ContentContainer>
        </>
    );
}

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: Green;
`

export default Test2;