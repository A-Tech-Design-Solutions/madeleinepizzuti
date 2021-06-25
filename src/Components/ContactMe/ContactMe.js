import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		flexGrow: 1,
		backgroundColor: "#b7e2f2",
		textAlign: "center",
		padding: theme.spacing(4),
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: "25ch",
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
		// width: "20%",
		// fontFamily: "Titillium Web",
		// marginLeft: 5,
	},
}));

function ContactMe() {
	const classes = useStyles();
	return (
		<div className={classes.root} id="ContactMe">
			<Container maxWidth="md">
				<h1 style={{ textAlign: "center" }}>Contact me</h1>

				<form>
					<TextField
						id="filled-full-width"
						label="Name"
						style={{ margin: 8 }}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
						variant="filled"
						type="text"
						required
						name="name"
					/>

					<TextField
						id="filled-full-width"
						label="Email"
						style={{ margin: 8 }}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
						variant="filled"
						type="text"
						name="email"
						required
					/>
					<TextField
						id="filled-full-width"
						label="Message"
						style={{ margin: 8 }}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
						variant="filled"
						type="text"
					/>
				</form>
				<Button className={classes.buttonStyle} input type="submit">
					Submit
				</Button>
			</Container>
		</div>
	);
}

export default ContactMe;
