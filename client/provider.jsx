import React, { useState } from "react";

const initBoard = {
    pegData: {
        a: [],
        b: [],
        c: []
    }
}

const initMoves = {
    disk: null,
    fromRod: null
}

export const AppContext = React.createContext(initBoard);

export const AppProvider = props => {
    const [board, setBoard] = useState(initBoard);
    const [moves, setMoves] = useState(initMoves);

    board.init = (diskCount) => {
        const clonedBoard = Object.assign({}, board);
        clonedBoard.disks = diskCount;
        clonedBoard.pegData.a = [];
        clonedBoard.pegData.b = [];
        clonedBoard.pegData.c = [];
        clonedBoard.pegData.a = Array.from({ length: diskCount }, (_, i) => i + 1);
        setBoard(clonedBoard);
    };

    board.move = (toRod) => {
        if (moves.disk && moves.fromRod) {
            if (board.pegData[toRod].length === 0 || board.pegData[toRod][0] > moves.disk) {
                let clonedBoard = Object.assign({}, board);
                let d = clonedBoard.pegData[moves.fromRod].shift();
                clonedBoard.pegData[toRod].unshift(d);
                setBoard(clonedBoard);
            }

        }
    };

    board.setStage = (fromRod, selectedDisk) => {
        let clonedMoves = Object.assign({}, moves);
        clonedMoves.fromRod = fromRod;
        clonedMoves.disk = selectedDisk;
        setMoves(clonedMoves);
    };

    return (
        <AppContext.Provider value={board}>{props.children}</AppContext.Provider>
    );
};