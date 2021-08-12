import React, { Fragment, useContext } from 'react';
import { AppContext } from "./provider.jsx";

export default function Pegs(props) {
    const ctx = useContext(AppContext);
    console.log("PEGS");
    console.log(props);
    console.log(ctx);

    const tick = (evt) => {
        console.log("tick");
        console.log(evt);
    };

    const create = (id, click) => {
        let w = (id / ctx.disks) * 100;
        let s = { backgroundColor: 'red', width: parseInt(w) + "%", height: '40px', display: "block" };
        return React.createElement(
            'div',
            click ? { style: s, id: id, key: id, onClick: tick } : { style: s, id: id, key: id }, ""
        )
    };

    const html = (d) => {
        return d.map((el, idx) => {
            if (idx > 0) {
                return create(el, false);
            } else {
                return create(el, true);
            }
        });
    };

    return (
        <Fragment>
            <div id="col-a" className="cols">
                <div id="peg-a" class="peg">
                    {props.data.a.length && html(props.data.a)}
                </div>
            </div>

            <div id="col-b" className="cols">
                <div id="peg-b" class="peg">
                    {props.data.b.length && html(props.data.b)}
                </div>
            </div>

            <div id="col-c" className="cols">
                <div id="peg-c" class="peg">
                    {props.data.c.length && html(props.data.c)}
                </div>
            </div>
        </Fragment>
    );
};
