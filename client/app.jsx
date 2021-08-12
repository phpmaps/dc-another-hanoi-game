import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board.jsx';
import { AppProvider } from "./provider.jsx";

function App() {
	return (
		<AppProvider>
			<Board/>
		</AppProvider>
	);
}
ReactDOM.render(<App />, document.getElementById('root'));
