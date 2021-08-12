import React, { useContext } from 'react';
import { AppContext } from "./provider.jsx";

export default function Layout(props) {

    const ctx = useContext(AppContext);

    return (
        <React.Fragment>
            <div className="board">
                <div className="content">
                    <div className="top">
                        <h1>Tower of Hanoi</h1>
                        <div className="puzzle-settings">
                            <label for="disks">Set number of disks </label>
                            <input id="disks"></input>
                            <button className="reset" onClick={() => {
                                let input = document.getElementById("disks");
                                ctx.init(input.value);
                            }}>Start puzzle</button>
                        </div>
                    </div>

                    <div className="middle">{props.children}</div>
                    
                    <div className="bottom"><div className="cols">
                        <button className="pad" onClick={() => {
                            ctx.move("a");
                        }}>Rod A</button>
                    </div>
                        <div className="cols">
                            <button className="pad" onClick={() => {
                                ctx.move("b");
                            }}>Rod B</button>
                        </div>
                        <div className="cols">
                            <button className="pad" onClick={() => {
                                ctx.move("c");
                            }}>Rod C</button>
                        </div></div>
                </div>
            </div>
        </React.Fragment>
    )

};
