import React from "react";
// import "./TellMeAStory.css";
import amazonlogo from "../../Images/amazonbuynow.png";
import StoryBook from "../../Images/TellMeAStory.png";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "#b7e2f2",
		padding: theme.spacing(4),
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "60%",
		maxHeight: "100%",
		// borderRadius: "6%;",
		// boxShadow: "0 0 15px rgb(0 0 0 / 8%)",
	},
}));

const TellMeAStory = () => {
	const classes = useStyles();

	return (
		<div id="TellMeAStory">
			<div className={classes.root}>
				<Container maxWidth="md">
					<h1 style={{ textAlign: "center" }}>Tell me a Story</h1>
					<Grid container spacing={8}>
						<Grid item md={6}>
							<Typography paragraph>
								Tell Me a Story… is a selection of stories drawn from my
								childhood memories – from my grandmother’s infamous jelly cubes
								to garden forks that go awry. From donkey rides to teenage
								crushes and a drummer boy that would make you smile.
							</Typography>

							<Typography paragraph>
								Set between the mid 1950s to 1970s, this memoir would appeal to
								adults and young adults alike, particularly those familiar with
								the Fenland district.
							</Typography>

							<Typography paragraph>
								Growing up in England and living in the small Fenland village of
								Leverington for eighteen years of my life created for me a
								myriad of memories – some sad, but most of them very happy. I
								was born in the Fenland capital of Wisbech, Cambridgeshire, and
								lived in a house that my father built. It was there that I
								enjoyed an idyllic childhood within the safe and warm embrace of
								my loving family, good friends and a large and lovable extended
								family.
							</Typography>

							<Typography paragraph>
								I can still smell the country air that surrounded us as we sat
								amongst the gooseberry bushes that day. The aroma of cucumber
								sandwiches, tea from a flask, bales of prickly straw, mingled
								with the smell of strawberries ripening in the distance, created
								for me, a childhood memory that would last forever.
							</Typography>
						</Grid>

						<Grid item md={6}>
							<img src={StoryBook} alt="Tellmeastory" className={classes.img} />
							<a href="https://www.amazon.co.uk/Tell-Story-Childhood-Madeleine-2016-04-28/dp/B01K2WKIT8/ref=sr_1_1?dchild=1&keywords=madeleine+pizzuti&qid=1605167812&s=books&sr=1-1">
								<img
									src={amazonlogo}
									alt="buyFromAmazon"
									className={classes.img}
								/>
							</a>
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	);
};

export default TellMeAStory;
