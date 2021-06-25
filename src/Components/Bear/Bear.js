import React from "react";
import BearBook from "../../Images/BearBook.png";
import "./Bear.css";
import amazonlogo from "../../Images/amazonbuynow.png";
import ReactiveYouTubePlayer from "../ReactiveYouTubePlayer/ReactiveYouTubePlayer";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
		// backgroundColor: "#b7e2f2",
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "60%",
		maxHeight: "100%",
		// borderRadius: "6%;",
		// boxShadow: "0 0 15px rgb(0 0 0 / 8%)",
	},
	buttonStyle: {
		background: "linear-gradient(45deg, #ffc955 30%, #ffb411 90%)",
		border: 0,
		borderRadius: 5,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		height: 48,
		padding: "0 30px",
		marginTop: 10,
		fontWeight: "bold",
		textAlign: "center",
		// fontFamily: "Titillium Web",
		// marginLeft: 5,
	},
}));

const Bear = () => {
	const classes = useStyles();

	return (
		<div id="Bear">
			<div className={classes.root}>
				<Container maxWidth="md">
					<h1 style={{ textAlign: "center" }}>
						Madeleine's Latest Release - BEAR
					</h1>

					<Grid container spacing={8}>
						<Grid item md={6}>
							<Typography paragraph>
								The adventures of a much-loved teddy bear and his young
								companion. When Bear first meets baby Michael, they get off to a
								shaky start. From close encounters with ceiling fans to
								confrontations with the slobbery dog next door, Bear’s life
								never lacks in adventure! But through the bad times and the
								good, friendship grows – a strong bond not even time can
								break.This is the story of a young boy and his beloved companion
								— Bear. Suitable for young readers 7-12 years and bedtime
								stories for younger children.
							</Typography>

							<Button
								a
								href="https://www.goodreads.com/search?utf8=%E2%9C%93&query=Madeleine+Pizzuti"
								className={classes.buttonStyle}
							>
								Read Reviews of BEAR!
							</Button>
						</Grid>

						<Grid item md={6}>
							<img src={BearBook} alt="bear" className={classes.img} />

							<a href="https://www.amazon.co.uk/Bear-adventures-much-loved-teddy-companion-ebook/dp/B08JN6998J">
								<img
									src={amazonlogo}
									alt="buyFromAmazon"
									className={classes.img}
								/>
							</a>
						</Grid>

						<Grid item xs>
							<ReactiveYouTubePlayer url="https://www.youtube.com/watch?v=7_dzOGPApf0" />
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	);
};

export default Bear;
