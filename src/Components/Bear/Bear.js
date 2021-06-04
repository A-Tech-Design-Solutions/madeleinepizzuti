import React from "react";
import "./Bear.css";

const Bear = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Madeleine's Latest Release - BEAR</h1>
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
					<h1>IRead Reviews of BEAR button or link or image</h1>
				</div>
				<div className="BearRight">
					<h1>Image of the book goes here</h1>
				</div>
				{/* This should be centered at the bottom. */}
			</div>
			<h1 style={{ textAlign: "center" }}>
				Purchase now on Amazon button or link or image
			</h1>
			{/* May need to make a seprate component */}
			<h1 style={{ textAlign: "center" }}>
				Video with random images surrounding it.
			</h1>
		</div>
	);
};

export default Bear;
