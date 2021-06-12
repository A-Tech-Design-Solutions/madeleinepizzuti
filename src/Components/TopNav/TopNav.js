import React from "react";
import "./TopNav.css";

const TopNav = () => {
	return (
		<div className="TopNavBack">
			<div className="Navigation">
				<a href="#About">About</a>
				<a href="#TellMeAStory" style={{ scrollBehavior: "smooth" }}>
					Tell me a story
				</a>
				<a href="#Bear">Bear</a>
				<a href="#ContactMe">Contact</a>
			</div>
		</div>
	);
};

export default TopNav;
