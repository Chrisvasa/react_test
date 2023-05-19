import { useEffect } from 'react';
import styled from "styled-components";


const Test = () => {
    return (
        <>
            <ContentContainer>
                <h1>Test 1</h1>
            </ContentContainer>
        </>
    );
}



const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: red;
`

export default Test;