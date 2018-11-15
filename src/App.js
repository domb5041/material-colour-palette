import React, { Component } from "react";
import "./App.css";
import Palette from "./components/Palette";
import logo from "./logo.png";
import "./components/Colour.css";

class App extends Component {
	state = {
		palettes: [
			{
				name: "red",
				colours: [
					{ value: "100", hex: "#FFCDD2" },
					{ value: "200", hex: "#EF9A9A" },
					{ value: "300", hex: "#E57373" },
					{ value: "400", hex: "#EF5350" },
					{ value: "500", hex: "#f44336" },
					{ value: "600", hex: "#e53935" },
					{ value: "700", hex: "#d32f2f" },
					{ value: "800", hex: "#c62828" },
					{ value: "900", hex: "#b71c1c" }
				]
			},
			{
				name: "pink",
				colours: [
					{ value: "100", hex: "#F8BBD0" },
					{ value: "200", hex: "#F48FB1" },
					{ value: "300", hex: "#F06292" },
					{ value: "400", hex: "#EC407A" },
					{ value: "500", hex: "#E91E63" },
					{ value: "600", hex: "#D81B60" },
					{ value: "700", hex: "#C2185B" },
					{ value: "800", hex: "#AD1457" },
					{ value: "900", hex: "#880E4F" }
				]
			},
			{
				name: "purple",
				colours: [
					{ value: "100", hex: "#E1BEE7" },
					{ value: "200", hex: "#CE93D8" },
					{ value: "300", hex: "#BA68C8" },
					{ value: "400", hex: "#AB47BC" },
					{ value: "500", hex: "#9C27B0" },
					{ value: "600", hex: "#8E24AA" },
					{ value: "700", hex: "#7B1FA2" },
					{ value: "800", hex: "#6A1B9A" },
					{ value: "900", hex: "#4A148C" }
				]
			},
			{
				name: "deep purple",
				colours: [
					{ value: "100", hex: "#D1C4E9" },
					{ value: "200", hex: "#B39DDB" },
					{ value: "300", hex: "#9575CD" },
					{ value: "400", hex: "#7E57C2" },
					{ value: "500", hex: "#673AB7" },
					{ value: "600", hex: "#5E35B1" },
					{ value: "700", hex: "#512DA8" },
					{ value: "800", hex: "#4527A0" },
					{ value: "900", hex: "#311B92" }
				]
			},
			{
				name: "indigo",
				colours: [
					{ value: "100", hex: "#C5CAE9" },
					{ value: "200", hex: "#9FA8DA" },
					{ value: "300", hex: "#7986CB" },
					{ value: "400", hex: "#5C6BC0" },
					{ value: "500", hex: "#3F51B5" },
					{ value: "600", hex: "#3949AB" },
					{ value: "700", hex: "#303F9F" },
					{ value: "800", hex: "#283593" },
					{ value: "900", hex: "#1A237E" }
				]
			},
			{
				name: "blue",
				colours: [
					{ value: "100", hex: "#BBDEFB" },
					{ value: "200", hex: "#90CAF9" },
					{ value: "300", hex: "#64B5F6" },
					{ value: "400", hex: "#42A5F5" },
					{ value: "500", hex: "#2196F3" },
					{ value: "600", hex: "#1E88E5" },
					{ value: "700", hex: "#1976D2" },
					{ value: "800", hex: "#1565C0" },
					{ value: "900", hex: "#0D47A1" }
				]
			},
			{
				name: "light blue",
				colours: [
					{ value: "100", hex: "#B3E5FC" },
					{ value: "200", hex: "#81D4FA" },
					{ value: "300", hex: "#4FC3F7" },
					{ value: "400", hex: "#29B6F6" },
					{ value: "500", hex: "#03A9F4" },
					{ value: "600", hex: "#039BE5" },
					{ value: "700", hex: "#0288D1" },
					{ value: "800", hex: "#0277BD" },
					{ value: "900", hex: "#01579B" }
				]
			},
			{
				name: "cyan",
				colours: [
					{ value: "100", hex: "#B2EBF2" },
					{ value: "200", hex: "#80DEEA" },
					{ value: "300", hex: "#4DD0E1" },
					{ value: "400", hex: "#26C6DA" },
					{ value: "500", hex: "#00BCD4" },
					{ value: "600", hex: "#00ACC1" },
					{ value: "700", hex: "#0097A7" },
					{ value: "800", hex: "#00838F" },
					{ value: "900", hex: "#006064" }
				]
			},
			{
				name: "teal",
				colours: [
					{ value: "100", hex: "#B2DFDB" },
					{ value: "200", hex: "#80CBC4" },
					{ value: "300", hex: "#4DB6AC" },
					{ value: "400", hex: "#26A69A" },
					{ value: "500", hex: "#009688" },
					{ value: "600", hex: "#00897B" },
					{ value: "700", hex: "#00796B" },
					{ value: "800", hex: "#00695C" },
					{ value: "900", hex: "#004D40" }
				]
			},
			{
				name: "green",
				colours: [
					{ value: "100", hex: "#C8E6C9" },
					{ value: "200", hex: "#A5D6A7" },
					{ value: "300", hex: "#81C784" },
					{ value: "400", hex: "#66BB6A" },
					{ value: "500", hex: "#4CAF50" },
					{ value: "600", hex: "#43A047" },
					{ value: "700", hex: "#388E3C" },
					{ value: "800", hex: "#2E7D32" },
					{ value: "900", hex: "#1B5E20" }
				]
			},
			{
				name: "light green",
				colours: [
					{ value: "100", hex: "#DCEDC8" },
					{ value: "200", hex: "#C5E1A5" },
					{ value: "300", hex: "#AED581" },
					{ value: "400", hex: "#9CCC65" },
					{ value: "500", hex: "#8BC34A" },
					{ value: "600", hex: "#7CB342" },
					{ value: "700", hex: "#689F38" },
					{ value: "800", hex: "#558B2F" },
					{ value: "900", hex: "#33691E" }
				]
			},
			{
				name: "lime",
				colours: [
					{ value: "100", hex: "#F0F4C3" },
					{ value: "200", hex: "#E6EE9C" },
					{ value: "300", hex: "#DCE775" },
					{ value: "400", hex: "#D4E157" },
					{ value: "500", hex: "#CDDC39" },
					{ value: "600", hex: "#C0CA33" },
					{ value: "700", hex: "#AFB42B" },
					{ value: "800", hex: "#9E9D24" },
					{ value: "900", hex: "#827717" }
				]
			},
			{
				name: "yellow",
				colours: [
					{ value: "100", hex: "#FFF9C4" },
					{ value: "200", hex: "#FFF59D" },
					{ value: "300", hex: "#FFF176" },
					{ value: "400", hex: "#FFEE58" },
					{ value: "500", hex: "#FFEB3B" },
					{ value: "600", hex: "#FDD835" },
					{ value: "700", hex: "#FBC02D" },
					{ value: "800", hex: "#F9A825" },
					{ value: "900", hex: "#F57F17" }
				]
			},
			{
				name: "amber",
				colours: [
					{ value: "100", hex: "#FFECB3" },
					{ value: "200", hex: "#FFE082" },
					{ value: "300", hex: "#FFD54F" },
					{ value: "400", hex: "#FFCA28" },
					{ value: "500", hex: "#FFC107" },
					{ value: "600", hex: "#FFB300" },
					{ value: "700", hex: "#FFA000" },
					{ value: "800", hex: "#FF8F00" },
					{ value: "900", hex: "#FF6F00" }
				]
			},
			{
				name: "orange",
				colours: [
					{ value: "100", hex: "#FFE0B2" },
					{ value: "200", hex: "#FFCC80" },
					{ value: "300", hex: "#FFB74D" },
					{ value: "400", hex: "#FFA726" },
					{ value: "500", hex: "#FF9800" },
					{ value: "600", hex: "#FB8C00" },
					{ value: "700", hex: "#F57C00" },
					{ value: "800", hex: "#EF6C00" },
					{ value: "900", hex: "#E65100" }
				]
			},
			{
				name: "deep orange",
				colours: [
					{ value: "100", hex: "#FFCCBC" },
					{ value: "200", hex: "#FFAB91" },
					{ value: "300", hex: "#FF8A65" },
					{ value: "400", hex: "#FF7043" },
					{ value: "500", hex: "#FF5722" },
					{ value: "600", hex: "#F4511E" },
					{ value: "700", hex: "#E64A19" },
					{ value: "800", hex: "#D84315" },
					{ value: "900", hex: "#BF360C" }
				]
			},
			{
				name: "brown",
				colours: [
					{ value: "100", hex: "#D7CCC8" },
					{ value: "200", hex: "#BCAAA4" },
					{ value: "300", hex: "#A1887F" },
					{ value: "400", hex: "#8D6E63" },
					{ value: "500", hex: "#795548" },
					{ value: "600", hex: "#6D4C41" },
					{ value: "700", hex: "#5D4037" },
					{ value: "800", hex: "#4E342E" },
					{ value: "900", hex: "#3E2723" }
				]
			},
			{
				name: "grey",
				colours: [
					{ value: "100", hex: "#F5F5F5" },
					{ value: "200", hex: "#EEEEEE" },
					{ value: "300", hex: "#E0E0E0" },
					{ value: "400", hex: "#BDBDBD" },
					{ value: "500", hex: "#9E9E9E" },
					{ value: "600", hex: "#757575" },
					{ value: "700", hex: "#616161" },
					{ value: "800", hex: "#424242" },
					{ value: "900", hex: "#212121" }
				]
			},
			{
				name: "blue grey",
				colours: [
					{ value: "100", hex: "#CFD8DC" },
					{ value: "200", hex: "#B0BEC5" },
					{ value: "300", hex: "#90A4AE" },
					{ value: "400", hex: "#78909C" },
					{ value: "500", hex: "#607D8B" },
					{ value: "600", hex: "#546E7A" },
					{ value: "700", hex: "#455A64" },
					{ value: "800", hex: "#37474F" },
					{ value: "900", hex: "#263238" }
				]
			}
		]
	};

	copyHexHandler = (palette, colour) => {
		document.addEventListener("copy", e => {
			e.clipboardData.setData(
				"text/plain",
				this.state.palettes[palette].colours[colour].hex
			);
			e.preventDefault();
		});
		document.execCommand("copy");
	};

	render() {
		return (
			<div className="App">
				<div className="toolbar">
					<img src={logo} alt="logo" />
					<h1>Material Colour Palette</h1>
				</div>
				<div className="palettes-container">
					{this.state.palettes.map((palettes, index) => {
						return (
							<Palette
								key={palettes.name}
								colours={palettes.colours}
								name={palettes.name}
								copyHex={colour => this.copyHexHandler(index, colour)}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default App;
