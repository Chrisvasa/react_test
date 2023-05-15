import styled from "styled-components";
import { StartButton } from "../Components/StartButton";
import { PlayerMovement } from "../Components/PlayerMovement";
import { useEffect, useState } from "react";


export default function Game() {
    const [game, setGame] = useState(false);
    return (
        <GameContainer>
            <GameBoard>
                <PlayerMovement />
            </GameBoard>
            <StartButton onClick={() => setGame(prevGame => !prevGame)} />
        </GameContainer>
    );
}

const GameBoard = styled.div`
    background-color: gray;
    width: 640px;
    height: 480px;
`;

const GameContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 80vh;
`;