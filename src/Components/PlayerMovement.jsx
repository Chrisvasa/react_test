import styled from "styled-components";
import { useEffect, useState } from "react";

export const PlayerMovement = ({ handleChange }) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [length, setLength] = useState(10);
    const [height, setHeight] = useState(10);

    const MINUTE_MS = 350;
    let key;
    const handleKeyPress = (e) => {
        // Tries to fix the issue of pressing a key more than once
        if (key == e.key) {
            console.log("Key was already pressed.")
        }
        else {
            const interval = setInterval(() => {
                if (key != e.key) {
                    clearInterval(interval);
                }
                handleMovement(e);
            }, MINUTE_MS)
            key = e.key
            return () => clearInterval(interval);
        }
    }

    const handleMovement = (e) => {
        if (e.key == 'ArrowLeft') {
            setX(x => x - 10);
        }
        else if (e.key == 'ArrowRight') {
            setX(prev => prev + 10);
        }
        else if (e.key == 'ArrowUp') {
            setY(y => y - 10);
        }
        else if (e.key == 'ArrowDown') {
            setY(y => y + 10);
        }
        // if (y % 2 == 0) {
        //     if (length > height) {
        //         setLength(length => length + 10);
        //     }
        // }
    }

    useEffect(() => {
        handleChange(x, y);
    }, [x, y])


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
        left: props.x + 'px',
        top: props.y + 'px',
    },
}))`
    background-color: black;
    position: relative;
`;