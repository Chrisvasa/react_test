import styled from "styled-components";
import { useEffect, useState } from "react";

export const PlayerMovement = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [length, setLength] = useState(10);
    const [height, setHeight] = useState(10);

    const handleKeyPress = (e) => {
        if (e.key == 'ArrowLeft') {
            setX(x => x - 1);
            let temp = length;
            setLength(length => length + height);
            setHeight(temp);
        }
        else if (e.key == 'ArrowRight') {
            setX(x => x + 1); // Position
            let temp = length;
            setLength(length => length + height);
            setHeight(temp);
        }
        else if (e.key == 'ArrowUp') {
            setY(y => y - 1);
            let temp = height;
            setHeight(height => height + length);
            setLength(temp);
        }
        else if (e.key == 'ArrowDown') {
            setY(y => y + 1);
            let temp = height;
            setHeight(height => height + length);
            setLength(temp);
        }
        if (y % 2 == 0 && x % 2 == 0) {
            if (length > height) {
                setLength(length => length + 10);
            }
            else {
                setHeight(height => height + 10);
            }
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
    }, [])

    return (
        <Player onKeyPress={handleKeyPress} x={x} y={y} length={length} height={height} />
    )
}

const Player = styled.div`
    width: ${({ length }) => length + 'px'};
    height: ${({ height }) => height + 'px'};
    left: ${({ x }) => x + 'rem'};
    top: ${({ y }) => y + 'rem'};
    background-color: black;
    position: relative;
`;
