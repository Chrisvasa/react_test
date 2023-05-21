import styled from "styled-components";
import { StartButton } from "../Components/StartButton";
import { PlayerMovement } from "../Components/PlayerMovement";
import { useEffect, useState, useRef } from "react";


export default function Game() {
    const [game, setGame] = useState(false);

    // Handles the rendering of the Snake gameplay
    // Sent to StartButton class which handles the toggle
    const handleClick = () => {
        setGame(prevGame => !prevGame);
        spawnFood();
    }


    // Min top: 10px || Max top: 460px
    // Min left: 10px || Max left: 620px
    const [top, setTop] = useState(10);
    const [left, setLeft] = useState(10);
    const spawnFood = () => {
        // A random number between the valid parameters, that then gets rounded to the nearest 10
        setTop(Math.round(Math.floor(Math.random() * (460 - 10 + 1) + 10) / 10) * 10);
        setLeft(Math.round(Math.floor(Math.random() * (620 - 10 + 1) + 10) / 10) * 10);
    }

    const [pos, setPos] = useState({ left: 0, top: 0 });
    const handleChange = (x, y) => {
        setPos({
            left: x,
            top: y,
        });
    }

    const checkPos = () => {
        if (left == pos.left && top == pos.top) {
            spawnFood();
        }
    }

    useEffect(() => {
        checkPos();
    }, [pos]);

    return (
        <GameContainer>
            <GameBoard>
                {game ? <Food top={top} left={left} /> : null}
                {game ? <PlayerMovement handleChange={handleChange} /> : null}
            </GameBoard>
            <StartButton handleClick={handleClick} />
        </GameContainer>
    );
}

const Food = styled.div.attrs(props => ({
    style: {
        background: props.background,
        left: props.left + 'px',
        top: props.top + 'px',
    },
}))`
    position: relative;
    height: 10px;
    width: 10px;
    background: yellow;
`;

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