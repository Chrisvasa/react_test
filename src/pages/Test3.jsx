import styled from "styled-components";

const Test3 = () => {
    return (
        <>
            <ContentContainer>
                <h1>Test 3</h1>
            </ContentContainer>
        </>
    );
}



const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: Blue;
`

export default Test3;