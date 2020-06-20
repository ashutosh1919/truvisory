import React, { Component } from "react";
import "./css/PosList.css";

export default class DesignList extends Component {
	render() {
		return (
			<div
				style={{
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
					textAlign: "center",
				}}
			>
				<div className="iframe-container">
					<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6680064346703306752" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
				</div>
				<div className="iframe-container">
					<iframe
						src="https://www.linkedin.com/embed/feed/update/urn:li:share:6678484082034401280"
						frameborder="0"
						allowfullscreen=""
						title="Embedded post"
					></iframe>
				</div>
				<div className="iframe-container">
					<iframe
						src="https://www.linkedin.com/embed/feed/update/urn:li:share:6673932432145813504"
						frameborder="0"
						allowfullscreen=""
						title="Embedded post"
					></iframe>
				</div>
				<div className="iframe-container">
					<iframe
						src="https://www.linkedin.com/embed/feed/update/urn:li:share:6663784908344963072"
						frameborder="0"
						allowfullscreen=""
						title="Embedded post"
					></iframe>
				</div>
				<div className="iframe-container">
					<iframe
						src="https://www.linkedin.com/embed/feed/update/urn:li:share:6662611269192945665"
						frameborder="0"
						allowfullscreen=""
						title="Embedded post"
					></iframe>
				</div>
				<div className="iframe-container">
					<iframe
						src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6650411211345223680"
						frameborder="0"
						allowfullscreen=""
						title="Embedded post"
					></iframe>
				</div>
			</div>
		);
	}
}
