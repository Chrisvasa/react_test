import styled from "styled-components";
import { StartButton } from "../Components/StartButton";


export default function Game() {
    return (
        <GameContainer>
            <StartButton />
        </GameContainer>
    );
}

const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
`;