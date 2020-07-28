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
	}, 1000);

	// useEffect(() => {
	// 	history.push("transactionInProgress");
	// }, [scanned]);

	console.log(props.location.search.substr(1));
	const url = "http://facebook.github.io/react" + props.location.search;

	return (
		<>
			<QRCode
				value={cardId}
				renderAs="svg"
				size="250"
				// includeMargin="true"
			/>
		</>
	);
}

export default QrCodeGeneration;
