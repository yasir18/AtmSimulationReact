import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Deposit(props) {
	const history = useHistory();
	const cardId = props.location.state.cardId;
	const [deposited, setDeposited] = useState(false);
	useEffect(() => {
		if (deposited) {
			const id = setInterval(() => {
				fetch(
					"https://qrbasedatm.herokuapp.com/deleteSyncOnTransactionCompleted",
					{
						method: "POST",
						headers: {
							"Content-type": "application/json",
							authorization: cardId,
						},
					}
				)
					.then((res) => res.json())

					.catch((err) => {
						console.log(err);
					});
				history.push("/");
			}, 3000);
			return () => {
				clearInterval(id);
			};
		}
	}, [deposited]);
	const gotoHomeScreen = () => {
		console.log("inside goto home");
		history.push("/");
	};
	return (
		<>
			{!deposited && (
				<div>
					<div style={{ fontSize: 30, color: "white" }}>
						<strong>Please deposit money in ATM</strong>
					</div>
					<div>
						<img
							src={process.env.PUBLIC_URL + "/deposit2.png"}
							style={{ width: "40vw", height: "40vh" }}
						/>
					</div>
					<div style={{ textAlign: "center" }}>
						{!deposited && (
							<button
								id="new-quote"
								className="btn btn-primary"
								onClick={() => setDeposited(!deposited)}
							>
								Cash Deposited
							</button>
						)}
					</div>
				</div>
			)}
			{deposited && (
				<div style={{ fontSize: 30, color: "white" }}>
					{" "}
					<strong>Deposited Successfully</strong>
				</div>
			)}
		</>
	);
}

export default Deposit;
