import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import styled, { createGlobalStyle } from "styled-components"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Map from "./pages/Map"
import PageNotFound from "./pages/PageNotFound"

const GlobalStyle = createGlobalStyle`
	html, body {
		font-family: Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: white;
		padding: 0px;
		margin: 0;
	}

	body::-webkit-scrollbar {
		width: 0.4rem;
	}

	body::-webkit-scrollbar-track {
		background: #ffffff;
	}

	body::-webkit-scrollbar-thumb {
		background: #8a9dff;
	}
`

const StyledApp = styled.div`
	text-align: center;
	padding-top: 80px;

	a:link,
	a:visited {
		text-decoration: none;
		display: inline-block;
		color: blue;
		text-align: center;
		vertical-align: center;
	}
`

ReactDOM.render(
	<React.StrictMode>
		<HelmetProvider>
			<GlobalStyle />
			<Router>
				<Navbar />
				<StyledApp>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/gallery">
							<Gallery />
						</Route>
						<Route exact path="/map">
							<Map />
						</Route>
						<Route exact path="/404">
							<PageNotFound />
						</Route>
						<Route>
							<PageNotFound />
						</Route>
					</Switch>
				</StyledApp>
			</Router>
		</HelmetProvider>
	</React.StrictMode>,
	document.getElementById("root")
)

reportWebVitals()
