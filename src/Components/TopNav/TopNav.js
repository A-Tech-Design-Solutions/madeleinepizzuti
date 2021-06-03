import React from "react";
import "./TopNav.css";
import { HashLink } from "react-router-hash-link";

const TopNav = () => {
	return (
		<div className="TopNavBack">
			<div className="Navigation">
				<HashLink smooth to="/about#about">
					About
				</HashLink>
				<li>Tell me a story</li>
				<li>Bear</li>
				<li>Contact</li>
			</div>
		</div>
	);
};

export default TopNav;
