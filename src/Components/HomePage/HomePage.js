import React from "react";
import "./HomePage.css";
import Footer from "../Footer/Footer";
import TopNav from "../TopNav/TopNav";
import BearBook from "../../Images/BearBook.png";
import StoryBook from "../../Images/TellMeAStory.png";

const HomePage = () => {
	return (
		<div className="mainBodyBack">
			<div className="mainBodyContainter">
				<TopNav />
				<div className="mainContent">
					<img src={BearBook} alt="bear" />
					<div className="itemList">
						<h1>Madeleine Pizzuti</h1>
						<h1>hello</h1>
						<h1>hello</h1>
					</div>
					<img src={StoryBook} alt="Tellmeastory" />
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default HomePage;
