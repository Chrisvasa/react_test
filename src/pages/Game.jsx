import styled from "styled-components";
import { StartButton } from "../Components/StartButton";
import { PlayerMovement } from "../Components/PlayerMovement";
import { useEffect, useState } from "react";


export default function Game() {
    // TEMPORARY SCORE
    const [score, setScore] = useState(0);
    const [game, setGame] = useState(false);

    // Handles the rendering of the Snake gameplay
    // Sent to StartButton class which handles the toggle
    const handleClick = () => {
        setGame(prevGame => !prevGame);
        setScore(0);
        spawnFood();
    }

    // Min top: 10px || Max top: 460px
    // Min left: 10px || Max left: 620px
    const [top, setTop] = useState(10);
    const [left, setLeft] = useState(10);
    const spawnFood = () => {
        // A random number between the valid parameters, that then gets rounded to the nearest 10
        setTop(Math.round(Math.floor(Math.random() * (460 - 10) + 10) / 10) * 10);
        setLeft(Math.round(Math.floor(Math.random() * (620 - 10) + 10) / 10) * 10);
    }

    const [pos, setPos] = useState({ left: 0, top: 0 });
    const handleChange = (x, y) => {
        if (x >= 0 && x <= 640 && y >= 0 && y <= 480) {
            setPos({
                left: x,
                top: y,
            });
        }
        else (
            handleClick(),
            console.log("You lose")
        )
    }

    const between = (value, minVal, maxVal) => {
        return value >= minVal && value <= maxVal;
    }
    // Checks if currently colliding with food or not
    // Spawns food in a new location and adds one to the score if collision occurs
    const checkPos = () => {
        if (between(pos.left, left - 10, left + 10) && between(pos.top, top - 2, top + 2)) {
            spawnFood();
            setScore(prevScore => prevScore + 1);
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
            <p>Score: {score}</p>
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