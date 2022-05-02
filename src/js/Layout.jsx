import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import ListPlanets, { Planets } from "./views/starWars/planets";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Index from "./views/starWars/planets/index.js";

const Layout = () => {
	const basename = process.env.BASENAME || "";
	console.log(process.env);
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/planets">
							<ListPlanets />
						</Route>
						<Route exact path="/planets/:id">
							<Planets />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
