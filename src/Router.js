import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import About from "./Components/About/About";

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/about" component={About} />
		</Switch>
	);
};

export default Router;
