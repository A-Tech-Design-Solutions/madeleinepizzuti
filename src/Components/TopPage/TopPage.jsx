import React from "react";
import "./TopPageStyle.css";

// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import MainBackground from "../../Images/background.png";
import BearBook from "../../Images/BearBook.png";
import StoryBook from "../../Images/TellMeAStory.png";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundImage: `url(${MainBackground})`,
		backgroundSize: "Cover",
		padding: theme.spacing(4),
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
	},
}));

const TopPage = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg" style={{ marginBottom: "2%" }}>
				<Grid justify="space-between" container spacing={3}>
					<Grid item md={3}>
						<img src={BearBook} alt="bear" className={classes.img} />
					</Grid>
					<Grid item md>
						<div className="itemList">
							<h1>Madeleine Pizzuti</h1>
							<h1>Author of</h1>
							<h1>'TELL ME A STORY'</h1>
							<h1>and</h1>
							<h1>'BEAR'</h1>
						</div>
					</Grid>
					<Grid item md={3}>
						<img src={StoryBook} alt="Tellmeastory" className={classes.img} />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default TopPage;
