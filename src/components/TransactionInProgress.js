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
	}, 5000);

	// useEffect(() => {
	// 	history.push("transactionInProgress");
	// }, [scanned]);

	console.log(props.location.state.cardId);
	const url = "http://facebook.github.io/react" + props.location.search;

	return (
		<div style={{ fontSize: 30 }}>
			<strong>Please complete transaction in Mobile Screen</strong>
		</div>
	);
}

export default TransactionInProgress;
