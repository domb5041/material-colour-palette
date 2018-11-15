import React from "react";
import Colour from "./Colour";
import "./Palette.css";

const Palette = props => {
	return (
		<div className="palette">
			<div className="colours">
				{props.colours.map((colours, index) => {
					return (
						<Colour
							key={props.name + colours.value}
							name={props.name}
							hex={colours.hex}
							value={colours.value}
							copyHex={() => props.copyHex(index)}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Palette;
