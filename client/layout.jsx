import React, { useContext } from 'react';
import { AppContext } from "./provider.jsx";

export default function Layout(props) {
    const ctx = useContext(AppContext);
    return (
        <React.Fragment>
            <div className="board">
                <div className="content">
                    <div className="info">
                        <div>
                            <lable for="diskNumber"># of disks</lable>
                            <input id="diskNumber" value="5"></input>
                            <button onClick={() => {
                                let input = document.getElementById("diskNumber");
                                console.log(input.value);
                                ctx.init(input.value);
                            }}>Restart game</button>
                        </div>
                    </div>
                    <div className="main">
                        {props.children}
                    </div>
                </div>
                <div class="footer">
                    <div className="cols">
                        <button onClick={() => {
                            alert("hi");
                        }}>Peg A</button>
                    </div>
                    <div className="cols">
                        <button onClick={() => {
                            let clonedBoard = Object.assign({}, board);
                            let topDisk = clonedBoard.pegA.shift();
                            console.log(topDisk);
                            clonedBoard.pegB.unshift(topDisk);
                            setBoard(clonedBoard);

                        }}>Peg B</button>

                    </div>
                    <div className="cols">
                        <button onClick={() => {
                            let clonedBoard = Object.assign({}, board);
                            let topDisk = clonedBoard.pegB.shift();
                            clonedBoard.pegC.unshift(topDisk);
                            setBoard(clonedBoard);
                        }}>Peg C</button>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )

};
