import React from "react";
import "./AboutStyling.css";
import madeleine from "../../Images/madeleine-pic.jpg";
import madeleinejeremy from "../../Images/madeleineandjeremy.jpg";
import ReactiveYouTubePlayer from "../ReactiveYouTubePlayer/ReactiveYouTubePlayer";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(4),
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "80%",
		maxHeight: "100%",
		borderRadius: "6%;",
		boxShadow: "0 0 15px rgb(0 0 0 / 8%)",
	},
}));

const About = () => {
	const classes = useStyles();

	return (
		<div id="About">
			<div className={classes.root}>
				<Container maxWidth="md">
					<h1 style={{ textAlign: "center" }}>About me</h1>
					<Grid container spacing={8}>
						<Grid item md={6}>
							<img src={madeleine} alt="Madeleine" className={classes.img} />
						</Grid>
						<Grid item md={6}>
							<Typography paragraph>
								The reason for writing my first book – “Tell Me a Story” came
								from the need to leave something behind for my grandchildren. I
								wanted them to know the person that I am – to have some
								knowledge of how their ‘Nanny’ lived as a young child in England
								and how it differs from their own childhood.
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
								Tell Me A Story… is a selection of stories drawn from my
								childhood memories – from my grandmother’s infamous jelly cubes
								to garden forks that go awry. From donkey rides to teenage
								crushes and a drummer boy that would make you smile. Set between
								the mid 1950s to 1970s, this memoir would appeal to adults and
								young adults alike; particularly those familiar with the Fenland
								district.
							</Typography>
						</Grid>
					</Grid>
					<Divider style={{ margin: "2%" }} />

					<Grid container spacing={8}>
						<Grid item md={6}>
							<img
								src={madeleinejeremy}
								alt="madelineandjeremy"
								className={classes.img}
							/>
							<Typography variant="subtitle1" align="center">
								Madeleine with Jeremy Sallis of BBC Radio Cambridgeshire
							</Typography>
							<ReactiveYouTubePlayer url="https://www.youtube.com/watch?v=D6I0uHECG-k" />
						</Grid>

						<Grid item md={6}>
							<Typography paragraph>
								I was born in the market town of Wisbech, Cambridgeshire,
								England in 1953. My parents had met during the war in Egypt
								where my mother lived. When the war was over and after a lengthy
								engagement, they married and settled in the village of
								Leverington, near Wisbech, which is where my brother and myself
								grew up.
							</Typography>

							<Typography paragraph>
								My childhood, growing up in the Fenland district of England, was
								packed with fun and adventure, and yet at the same time, we were
								surrounded by the warmth and security of our loving parents. We
								always knew there was a safe haven to come home to at the end of
								each day.
							</Typography>

							<Typography paragraph>
								In September 1972, at the age of eighteen, I left the security
								of my family in search of more adventure, and emigrated to
								Sydney, Australia, where I have lived now for 43 years.
							</Typography>

							<Typography paragraph>
								I have always had a love for writing and my plan, upon arriving
								in Australia, was to pursue a career in journalism. However,
								this was not to be – instead I followed the path of secretarial
								work for many years before marrying and having three sons.
							</Typography>

							<Typography paragraph>
								When my youngest son started school I went back into the
								workforce as a Teacher’s Aide (Special Needs) and stayed in that
								line of work for 13 years.The transition from being a Teacher’s
								aide in the Catholic School System to becoming a Pastoral
								Associate in the Catholic Church, which is where I have been
								employed for the past 12 years, was relatively smooth – it was a
								position I had been preparing for over the years, and I enjoy it
								immensely.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	);
};

export default About;
