import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useInterval } from "./useInterval";
import QRCode from "qrcode.react";

function QrCodeGeneration(props) {
	const [scanned, setScanned] = useState(false);
	const cardId = props.location.state.cardId;
	console.log(cardId);
	const history = useHistory();
	useInterval(() => {
		fetch("https://qrbasedatm.herokuapp.com/getSyncDetails", {
			method: "GET",
			headers: {
				authorization: cardId,
			},
		})
			.then((res) => res.json())
			.then((syncDetails) => {
				console.log(syncDetails.syncDetails.isBarcodeScanned);
				if (syncDetails.syncDetails.isBarcodeScanned)
					history.push("transactionInProgress", { cardId: cardId });
				// setScanned(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}, 500);

	// useEffect(() => {
	// 	history.push("transactionInProgress");
	// }, [scanned]);

	console.log(props.location.search.substr(1));
	const url = "http://facebook.github.io/react" + props.location.search;

	return (
		<div
			style={{
				width: "80vw",
				height: "80vh",
				display: "flex",
				justifyContent: "space-around",
				alignItems: "center",
			}}
		>
			<div>
				<div
					style={{ fontSize: 30, color: "white", marginBottom: "30" }}
				>
					<strong>Scan QR Code </strong>
				</div>
				<div>
					<QRCode
						value={cardId}
						renderAs="svg"
						size="250"
						includeMargin="true"
					/>
				</div>
			</div>
			<div style={{ fontSize: 30, color: "white" }}>
				<strong>Proceed with Normal Flow </strong>
				<div style={{ textAlign: "center" }}>
					<button
						className="btn btn-primary"
						style={{ marginRight: "20" }}
					>
						Touch based Flow
					</button>
				</div>
			</div>
		</div>
	);
}

export default QrCodeGeneration;
