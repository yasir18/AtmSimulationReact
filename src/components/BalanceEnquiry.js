import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function BalanceEnquiry(props) {
	const history = useHistory();
	useEffect(() => {
		const id = setInterval(() => {
			history.push("/");
		}, 3000);
		return () => {
			clearInterval(id);
		};
	}, []);
	const balance = props.location.state.balance;
	return (
		<div style={{ fontSize: 30, color: "white" }}>
			<strong>Your Current Balance is {balance}</strong>
		</div>
	);
}

export default BalanceEnquiry;
