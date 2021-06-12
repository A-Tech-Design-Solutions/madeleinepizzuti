import React from "react";
import "./ContactMe.css";

// https://www.w3schools.com/css/tryit.asp?filename=trycss_form_responsive

function ContactMe() {
	return (
		<div id="ContactMe">
			<div className="ContactMeContatiner">
				<h1>Contact</h1>
				<input type="text" name="Name" placeholder="Name..." />
				<input type="text" name="Email" placeholder="Email..." />
				<textarea
					id="subject"
					name="subject"
					placeholder="Please Ente Message Here..."
				/>
				<input type="submit" value="Submit" />
			</div>
		</div>
	);
}

export default ContactMe;
