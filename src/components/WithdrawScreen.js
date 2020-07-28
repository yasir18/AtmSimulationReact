import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function WithdrawScreen(props) {
	const [wihdrawClicked, setWithdrawClicked] = useState(false);
	const history = useHistory();
	useEffect(() => {
		if (wihdrawClicked) {
			const id = setInterval(() => {
				history.push("/");
			}, 3000);
			return () => {
				clearInterval(id);
			};
		}
	}, [wihdrawClicked]);

	const gotoHomeScreen = () => {
		console.log("inside goto home");
		history.push("/");
	};
	return (
		<>
			{!wihdrawClicked && (
				<div style={{ fontSize: 30 }}>
					<strong>Please collect your cash</strong>
				</div>
			)}
			<div>
				{!wihdrawClicked && (
					<button
						id="new-quote"
						className="btn btn-primary"
						onClick={() => setWithdrawClicked(!wihdrawClicked)}
					>
						Collect Cash
					</button>
				)}
			</div>
			{wihdrawClicked && (
				<div style={{ fontSize: 30 }}>
					<strong>Thank You</strong>
				</div>
			)}
		</>
	);
}

export default WithdrawScreen;
