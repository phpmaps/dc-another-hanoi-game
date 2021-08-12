import React, { useContext } from 'react';
import { AppContext } from "./provider.jsx";
import Pegs from "./pegs.jsx";
import Layout from './layout.jsx';

export default function Board() {
    const ctx = useContext(AppContext);
    return (
        <React.Fragment>
            <Layout>
                <Pegs data={ctx.pegData} />
            </Layout>
        </React.Fragment>
    )

};
