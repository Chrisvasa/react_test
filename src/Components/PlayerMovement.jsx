import styled from "styled-components";
import { useEffect, useState } from "react";

export const PlayerMovement = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [length, setLength] = useState(10);
    const [height, setHeight] = useState(10);

    const MINUTE_MS = 1000;
    let key;
    const handleKeyPress = (e) => {
        const interval = setInterval(() => {
            if (key != e.key) {
                clearInterval(interval);
            }
            move(e);
        }, MINUTE_MS)
        key = e.key
        return () => clearInterval(interval);
    }

    const move = (e) => {
        if (e.key == 'ArrowLeft') {
            setX(x => x - 1);
        }
        else if (e.key == 'ArrowRight') {
            setX(x => x + 1);
        }
        else if (e.key == 'ArrowUp') {
            setY(y => y - 1);
        }
        else if (e.key == 'ArrowDown') {
            setY(y => y + 1);
        }
        if (y % 2 == 0) {
            if (length > height) {
                setLength(length => length + 10);
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

const Player = styled.div.attrs(props => ({
    style: {
        background: props.background,
        width: props.length,
        height: props.height,
        left: props.x + 'rem',
        top: props.y + 'rem',
    },
}))
    `background-color: black;
    position: relative;
`;
// width: ${({ length }) => length + 'px'};
// height: ${({ height }) => height + 'px'};

// .attrs(({ x, y, length, height }) => ({
//     style: {
//         width: ({ length }) => length + 'px',
//         height: ({ height }) => height + 'px',
//         left: ({ x }) => x + 'rem',
//         top: ({ y }) => y + 'rem'
//     }
// }))`