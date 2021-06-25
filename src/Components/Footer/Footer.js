import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Footer = () => {
	return (
		<div>
			<Container maxWidth="md" style={{ marginTop: "2%", marginBottom: "2%" }}>
				<Typography variant="subtitle2" align="center">
					© A - Tech Design Solutions @2021
				</Typography>
			</Container>
		</div>
	);
};

export default Footer;
