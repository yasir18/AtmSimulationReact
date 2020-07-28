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
		<div id="quote-box" style={{ width: "30rem" }}>
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
					<blockquote class="blockquote mb-0">
						<input
							type="number"
							placeholder=" card Number"
							onChange={(e) => setCardId(e.target.value)}
							value={cardId}
						/>
					</blockquote>
				</div>
			</div>
			<div className="container" style={{ margin: "1em " }}>
				<button
					id="new-quote"
					className="btn btn-primary"
					onClick={() => gotoQrCodeGenerationScreen()}
				>
					Generate Qr
				</button>
			</div>
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
