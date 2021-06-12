import React from "react";
import ReactPlayer from "react-player";
import "./ReactiveYouTubePlayerStyle.css";

// https://www.npmjs.com/package/react-player

const ReactiveYouTubePlayer = ({ url }) => {
	return (
		<div>
			<div className="player-wrapper">
				<ReactPlayer
					className="react-player"
					url={url}
					controls={true}
					width="100%"
					height="100%"
				/>
			</div>
		</div>
	);
};

export default ReactiveYouTubePlayer;
