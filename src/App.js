import React from "react";
import "./App.css";
import Home from "./components/Home";
import QrCodeGeneration from "./components/QrCodeGeneration";
import TransactionInProgress from "./components/TransactionInProgress";
import WithdrawScreen from "./components/WithdrawScreen";
import BalanceEnquiry from "./components/BalanceEnquiry";
import Deposit from "./components/Deposit";

import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/qrCodeGeneration" component={QrCodeGeneration} />
			<Route
				path="/transactionInProgress"
				component={TransactionInProgress}
			/>
			<Route path="/withdrawScreen" component={WithdrawScreen} />
			<Route path="/balanceEnquiry" component={BalanceEnquiry} />
			<Route path="/deposit" component={Deposit} />
		</Switch>
	);
}

export default App;
