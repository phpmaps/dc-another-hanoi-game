import React, { Fragment, useContext, useState } from 'react';
import { AppContext } from "./provider.jsx";

export default function Pegs(props) {
    const ctx = useContext(AppContext);
    const [diskIdx, setDiskIdx] = useState(null);

    const tick = (evt) => {
        let uid = evt.target.id.split("-");
        setDiskIdx(evt.target.id);
        ctx.setStage(uid[0], uid[1]);
    };

    const create = (id, clickable, rod) => {
        let w = (id / ctx.disks) * 100;
        let s = { width: parseInt(w) + "%", height: '40px'};
        let uid = `${rod}-${id}`;
        let top = { className: diskIdx == uid ? 'selected' : 'base', style: s, id: uid, key: id, onClick: tick };
        let bottom = { className: diskIdx === uid ? 'selected' : 'base', style: s, id: uid, key: id };
        return React.createElement(
            'div',
            clickable ? top : bottom
        )
    };

    const html = (d, rod) => {
        return d.map((el, idx) => {
            if (idx > 0) {
                return create(el, false, rod);
            } else {
                return create(el, true, rod);
            }
        });
    };

    return (
        <Fragment>
            <div id="col-a" className="cols">
                <div id="peg-a" class="peg">
                    {props.data.a.length > 0 && html(props.data.a, "a")}
                </div>
            </div>

            <div id="col-b" className="cols">
                <div id="peg-b" class="peg">
                    {props.data.b.length > 0 && html(props.data.b, "b")}
                </div>
            </div>

            <div id="col-c" className="cols">
                <div id="peg-c" class="peg">
                    {props.data.c.length > 0 && html(props.data.c, "c")}
                </div>
            </div>
        </Fragment>
    );
};
