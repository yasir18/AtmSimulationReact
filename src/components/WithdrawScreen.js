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
				<div>
					<div style={{ fontSize: 30, color: "white" }}>
						<strong>Please collect your cash</strong>
					</div>
					<div>
						<img
							src={process.env.PUBLIC_URL + "/withdraw3.png"}
							style={{ width: "40vw", height: "40vh" }}
						/>
					</div>
					<div style={{ textAlign: "center", marginTop: "20" }}>
						{!wihdrawClicked && (
							<button
								id="new-quote"
								className="btn btn-primary"
								onClick={() =>
									setWithdrawClicked(!wihdrawClicked)
								}
							>
								Collect Cash
							</button>
						)}
					</div>
				</div>
			)}

			{wihdrawClicked && (
				<div style={{ fontSize: 30 }}>
					<strong>Thank You</strong>
				</div>
			)}
		</>
	);
}

export default WithdrawScreen;
