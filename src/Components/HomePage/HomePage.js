import React from "react";
import "./HomePage.css";
import Footer from "../Footer/Footer";
import TopNav from "../TopNav/TopNav";
import BearBook from "../../Images/BearBook.png";
import StoryBook from "../../Images/TellMeAStory.png";
import About from "../About/About";

const HomePage = () => {
	return (
		<div className="mainBodyBack">
			<div className="mainBodyContainter">
				<TopNav />

				{/* revise top content */}
				<div className="mainContent">
					<img src={BearBook} alt="bear" />

					{/* Revise itemlist content, try not to spam h1 tags */}
					<div className="itemList">
						<h1>Madeleine Pizzuti</h1>
						<h1>Author of</h1>
						<h1>'TELL ME A STORY'</h1>
						<h1>and</h1>
						<h1>'BEAR'</h1>
					</div>
					<img src={StoryBook} alt="Tellmeastory" />
				</div>
				<About />

				<Footer />
			</div>
		</div>
	);
};

export default HomePage;
