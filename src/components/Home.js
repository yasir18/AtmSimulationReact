import React, { useState } from "react";
import { useInterval } from "./useInterval";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
	const [cardId, setCardId] = useState("");
	const history = useHistory();
	const gotoQrCodeGenerationScreen = () => {
		history.push("qrCodeGeneration", { cardId: cardId });
	};

	return (
		<div
			id="quote-box"
			style={{
				width: "80vw",
				height: "80vh",
				display: "flex",
				justifyContent: "space-around",
				alignItems: "center",
			}}
		>
			{/* <div>
				<img src={process.env.PUBLIC_URL + "/cardswipe3.png"} />
			</div> */}
			<div
				style={{
					fontSize: 30,
					color: "white",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
				}}
			>
				<div>
					<img src={process.env.PUBLIC_URL + "/cardswipe3.png"} />
				</div>
				<div style={{ marginTop: "20" }}>
					<strong>Please swipe ATM card</strong>
				</div>
			</div>
			<div class="card">
				<div
					class="card-header"
					style={{
						display: "flex",
					}}
				>
					Please Enter Card Number
				</div>
				<div class="card-body">
					<input
						type="number"
						placeholder=" card Number"
						onChange={(e) => setCardId(e.target.value)}
						value={cardId}
						style={{ marginRight: "20" }}
					/>
					<button
						className="btn btn-primary"
						style={{ marginRight: "20" }}
						onClick={() => gotoQrCodeGenerationScreen()}
					>
						Enter
					</button>
				</div>
			</div>

			{/* <div className="container" style={{ margin: "1em " }}>
				<button
					id="new-quote"
					className="btn btn-primary"
					onClick={() => gotoQrCodeGenerationScreen()}
				>
					Generate Qr
				</button>
			</div> */}
			<div></div>
		</div>
	);
};
export default Home;

// useInterval(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//         .then((response) => response.json())
//         .then((json) => {
//             console.log(json);
//             setTodo(json.title);
//         });
// }, 1000);
