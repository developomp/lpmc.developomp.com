import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import styled, { createGlobalStyle, css } from "styled-components"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Map from "./pages/Map"
import PageNotFound from "./pages/PageNotFound"

import "semantic-ui-css/semantic.min.css"

// auto format doesn't work when using createGlobalStyle for some reason
const GlobalStyleCSS = css`
	html,
	body,
	#root > div {
		font-family: Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		padding: 0;
		margin: 0;

		height: 100%;
		width: 100%;
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

const GlobalStyle = createGlobalStyle`
	${GlobalStyleCSS}
`

const StyledApp = styled.div`
	text-align: center;

	a:link,
	a:visited {
		text-decoration: none;
		color: blue;
	}
`

ReactDOM.render(
	<React.StrictMode>
		<HelmetProvider>
			<GlobalStyle />
			<Router>
				<StyledApp>
					<Navbar />
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
