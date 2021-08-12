import React, { useState } from "react";

const initBoard = {
    pegData: {
        a: [],
        b: [],
        c: []
    },
    disk: null,
    disks: null,
    init: () => { },
    select: () => { },
    move: () => { },
}

export const AppContext = React.createContext(initBoard);

export const AppProvider = props => {
    const [board, setBoard] = useState(initBoard);

    board.init = (diskCount) => {
        console.log(diskCount, "hi");
        const clonedBoard = Object.assign({}, board);
        clonedBoard.disks = diskCount;
        clonedBoard.pegData.a = [];
        clonedBoard.pegData.b = [];
        clonedBoard.pegData.c = [];
        clonedBoard.pegData.a = Array.from({ length: diskCount }, (_, i) => i + 1);
        setBoard(clonedBoard);
    };

    board.select = (evt) => {
        console.log("select");
        console.log(evt);
    };

    board.move = (evt) => {
        console.log("move");
        console.log(evt);
    };

    return (
        <AppContext.Provider value={board}>{props.children}</AppContext.Provider>
    );
};