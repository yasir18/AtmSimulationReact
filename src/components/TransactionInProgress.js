import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useInterval } from "./useInterval";
import QRCode from "qrcode.react";

function TransactionInProgress(props) {
	const [scanned, setScanned] = useState(false);
	const cardId = props.location.state.cardId;
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
				console.log(syncDetails.syncDetails);
				if (syncDetails.syncDetails.isWithdrawSelected) {
					history.push("WithdrawScreen");
				}

				if (syncDetails.syncDetails.isBalanceEnquirySelected) {
					console.log("balalnce enquiry");
					fetch("https://qrbasedatm.herokuapp.com/balanceEnquiry", {
						method: "GET",
						headers: {
							"Content-type": "application/json",
							authorization: cardId,
						},
					})
						.then((res) => res.json())
						.then((responseJson) => {
							console.log(responseJson);
							var balance = responseJson.accountDetails.balance;
							console.log(balance);
							history.push("BalanceEnquiry", {
								balance: balance,
							});
						})
						.catch((err) => {
							console.log(err);
						});
				}

				if (syncDetails.syncDetails.isDepositSelected)
					history.push("Deposit", { cardId: cardId });
				// setScanned(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}, 500);

	return (
		<div>
			<div style={{ fontSize: 30, color: "white" }}>
				<strong>Please complete transaction in Mobile Screen</strong>
			</div>
			<div>
				<img
					src={process.env.PUBLIC_URL + "/transaction4.png"}
					style={{ width: "50vw", height: "50vh" }}
				/>
			</div>
		</div>
	);
}

export default TransactionInProgress;
