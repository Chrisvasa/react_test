import { NavLink, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import styled from "styled-components";

function ScrollToElement() {
    const { elementId } = useParams();
    const elementRef = useRef(null);

    useEffect(() => {
        elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [elementId]);

    return (
        <div id={elementId} ref={elementRef}>
            <h1>{elementId}</h1>
        </div>
    );
}

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