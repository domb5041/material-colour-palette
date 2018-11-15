import React from "react";
import "./Colour.css";

const Colour = props => {
	let textColour;
	if (parseInt(props.value) < 600) {
		textColour = {
			color: "rgba(0, 0, 0, 0.4)"
		};
	} else {
		textColour = {
			color: "rgba(255, 255, 255, 0.5)"
		};
	}
	return (
		<a
			href="javascript:void(0)"
			onClick={props.copyHex}
			style={{ backgroundColor: props.hex }}
			className="colour"
		>
			<div style={textColour} className="hexCode">
				{props.value}
			</div>
			<div className="copied" style={{ backgroundColor: props.hex }}>
				<h1 style={textColour}>{props.hex}</h1>
				<p style={textColour}>Copied to clipboard!</p>
			</div>
		</a>
	);
};

export default Colour;
