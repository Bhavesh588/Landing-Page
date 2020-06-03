import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./pages/homepage/homepage.component";
import Admin from './pages/adminpage/adminpage.component';

function App() {
	return (
		<Router>
			<Route path="/" exact component={Homepage} />
			<Route path="/admin" exact component={Admin} />
		</Router>
	);
}

export default App;
