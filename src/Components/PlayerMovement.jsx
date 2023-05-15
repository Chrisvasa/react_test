import styled from "styled-components";
import { useEffect, useState } from "react";

export const PlayerMovement = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleKeyPress = (e) => {
        if (e.key == 'ArrowLeft') {
            setX(game => game - 1);
        }
        else if (e.key == 'ArrowRight') {
            setX(game => game + 1);
        }
        else if (e.key == 'ArrowUp') {
            setY(game => game - 1);
        }
        else if (e.key == 'ArrowDown') {
            setY(game => game + 1);
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
    }, [])

    return (
        <Player onKeyPress={handleKeyPress} x={x} y={y} />
    )
}

const Player = styled.div`
    width: 10px;
    height: 10px;
    left: ${({ x }) => x + 'rem'};
    top: ${({ y }) => y + 'rem'};
    background-color: black;
    position: relative;
`;
