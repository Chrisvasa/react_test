import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from "styled-components";

//Pages
import Test from './Test';
import Test2 from './Test2';
import Test3 from './Test3';

// The different pages
const PageMap = {
    1: Test,
    2: Test2,
    3: Test3
};

// Renders the specified page with the given ID
function Page({ id }) {
    const PageToRender = PageMap[id];
    return (
        <div id={id}>
            <PageToRender />
        </div>
    );
}

const TestMain = () => {

    let location = useLocation();

    useEffect(() => {
        // Whenever the location changes, we scroll to the appropriate section
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })
        }
    }, [location]);

    return (
        <>
            <NavContainer>
                <NavLink to="">Section 1</NavLink>
                <NavLink to="#2">Section 2</NavLink>
                <NavLink to="#3">Section 3</NavLink>
            </NavContainer>

            <Page id="1" />
            <Page id="2" />
            <Page id="3" />
        </>
    );
}

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 5vh;
    background-color: yellow;
    position: sticky;
    top: 0;
    > * {
        font-size: 2rem;
        text-decoration: none;
        &:visited {
            color: black;
        }
    }
`

export default TestMain;