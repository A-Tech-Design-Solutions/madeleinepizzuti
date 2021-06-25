import React from "react";
import { Switch, Route } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
// import HomePage from "./Components/HomePage/HomePage";
import MainLandingPage from "./Components/MainLandingPage/MainLandingPage";
// import About from "./Components/About/About";

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={MainLandingPage} />
			{/* <Route exact path="/about" component={About} /> */}
		</Switch>
	);
};

export default Router;
