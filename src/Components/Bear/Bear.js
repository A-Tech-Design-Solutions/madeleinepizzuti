import React from "react";
import BearBook from "../../Images/BearBook.png";
import "./Bear.css";
import amazonlogo from "../../Images/amazonbuynow.png";
import ReactiveYouTubePlayer from "../ReactiveYouTubePlayer/ReactiveYouTubePlayer";

const Bear = () => {
	return (
		<div id="Bear">
			<h1 style={{ textAlign: "center", color: "#4d3401" }}>
				Madeleine's Latest Release - BEAR
			</h1>
			<div className="BearContainer">
				<div className="BearLeft">
					<p>
						The adventures of a much-loved teddy bear and his young companion.
						When Bear first meets baby Michael, they get off to a shaky start.
						From close encounters with ceiling fans to confrontations with the
						slobbery dog next door, Bear’s life never lacks in adventure! But
						through the bad times and the good, friendship grows – a strong bond
						not even time can break.This is the story of a young boy and his
						beloved companion — Bear. Suitable for young readers 7-12 years and
						bedtime stories for younger children.
					</p>
					<div className="BearLeftCombined">
						<a href="https://www.goodreads.com/search?utf8=%E2%9C%93&query=Madeleine+Pizzuti">
							<button> Read Reviews of BEAR!</button>
						</a>
						<a href="https://www.amazon.co.uk/Bear-adventures-much-loved-teddy-companion-ebook/dp/B08JN6998J">
							<img src={amazonlogo} alt="buyFromAmazon" class="amazonButton" />
						</a>
					</div>
				</div>
				<div className="BearRight">
					<img src={BearBook} alt="bear" />
				</div>
			</div>

			<ReactiveYouTubePlayer url="https://www.youtube.com/watch?v=7_dzOGPApf0" />
		</div>
	);
};

export default Bear;
