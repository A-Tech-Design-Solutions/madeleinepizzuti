import React from "react";
import "./TellMeAStory.css";
import amazonlogo from "../../Images/amazonbuynow.png";

const TellMeAStory = () => {
	return (
		<div>
			<div className="TellStoryContainer">
				<div className="TellStoryLeft">
					<p>
						Tell Me a Story… is a selection of stories drawn from my childhood
						memories – from my grandmother’s infamous jelly cubes to garden
						forks that go awry. From donkey rides to teenage crushes and a
						drummer boy that would make you smile.
					</p>

					<p>
						Set between the mid 1950s to 1970s, this memoir would appeal to
						adults and young adults alike, particularly those familiar with the
						Fenland district.
					</p>

					<p>
						Growing up in England and living in the small Fenland village of
						Leverington for eighteen years of my life created for me a myriad of
						memories – some sad, but most of them very happy. I was born in the
						Fenland capital of Wisbech, Cambridgeshire, and lived in a house
						that my father built. It was there that I enjoyed an idyllic
						childhood within the safe and warm embrace of my loving family, good
						friends and a large and lovable extended family.
					</p>

					<p>
						I can still smell the country air that surrounded us as we sat
						amongst the gooseberry bushes that day. The aroma of cucumber
						sandwiches, tea from a flask, bales of prickly straw, mingled with
						the smell of strawberries ripening in the distance, created for me,
						a childhood memory that would last forever.
					</p>
					<a
						href="https://www.amazon.co.uk/Tell-Story-Childhood-Madeleine-2016-04-28/dp/B01K2WKIT8/ref=sr_1_1?dchild=1&keywords=madeleine+pizzuti&qid=1605167812&s=books&sr=1-1"
						onclick="https://www.amazon.co.uk/Tell-Story-Childhood-Madeleine-2016-04-28/dp/B01K2WKIT8/ref=sr_1_1?dchild=1&keywords=madeleine+pizzuti&qid=1605167812&s=books&sr=1-1"
					>
						<img src={amazonlogo} alt="bottle" class="thumbnails" />
					</a>
				</div>
				<div className="TellStoryRight">
					<h1>Image of the book goes here</h1>
				</div>
			</div>
		</div>
	);
};

export default TellMeAStory;
