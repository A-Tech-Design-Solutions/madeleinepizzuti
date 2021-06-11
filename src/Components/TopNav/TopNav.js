import React from "react";
import "./TopNav.css";

const TopNav = () => {
	return (
		<div className="TopNavBack">
			<div className="Navigation">
				<li>
					<a href="#About">About</a>
				</li>

				<li>
					<a href="#TellMeAStory" style={{ scrollBehavior: "smooth" }}>
						Tell me a story
					</a>
				</li>
				<li>
					<a href="#Bear">Bear</a>
				</li>
				<li>
					<a href="#ContactMe">Contact</a>
				</li>
			</div>
		</div>
	);
};

export default TopNav;
