import React from "react";
import "./HomePage.css";
import Footer from "../Footer/Footer";
import TopNav from "../TopNav/TopNav";
import BearBook from "../../Images/BearBook.png";
import StoryBook from "../../Images/TellMeAStory.png";
import About from "../About/About";
import TellMeAStory from "../TellMeAStory/TellMeAStory";
import Bear from "../Bear/Bear";
import ContactMe from "../ContactMe/ContactMe";

const HomePage = () => {
	return (
		<div className="mainBodyBack">
			<div className="mainBodyContainter">
				<div className="HomeContent1">
					<TopNav />

					<div className="HomeContent2">
						<img src={BearBook} alt="bear" />

						<div className="itemList">
							<h1>Madeleine Pizzuti</h1>
							<h1>Author of</h1>
							<h1>'TELL ME A STORY'</h1>
							<h1>and</h1>
							<h1>'BEAR'</h1>
						</div>
						<img src={StoryBook} alt="Tellmeastory" />
					</div>
				</div>
				<About />
				<TellMeAStory />
				<Bear />
				<ContactMe />
				<Footer />
			</div>
		</div>
	);
};

export default HomePage;
