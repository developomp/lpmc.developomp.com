import { useState } from "react"
import { Link } from "react-router-dom"
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

import {
	Button,
	Dimmer,
	Icon,
	Menu,
	SemanticICONS,
	Sidebar,
} from "semantic-ui-react"

const blueColor = "#5d74ec"

const StyledNav = styled.nav`
	@import url("https://fonts.cdnfonts.com/css/bloxat");

	display: flex;
	justify-content: space-between;
	align-items: center;

	z-index: 10;
	position: static;
	width: 100vw;
	height: 5rem;
	box-shadow: 0 2px 5px grey;
	background-color: ${blueColor};
	color: white;
`

const Logo = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 0.2rem;

	color: white !important;

	text-decoration: none;
	font-family: "BLOXAT", sans-serif;
	text-transform: uppercase;
	letter-spacing: 5px;
	font-size: 3rem;

	img {
		width: 64px;
		height: 64px;
	}
`

const StyledRightButtons = styled.div`
	display: flex;
	align-items: center;
`

const Navigation = styled.div`
	display: flex;
	font-family: Helvetica;

	button {
		border-radius: 69420px !important;
		background-color: transparent !important;
		color: white !important;

		:hover {
			background-color: white !important;
			color: ${blueColor} !important;
		}
	}

	@media only screen and (max-width: 650px) {
		display: none;
	}
`

const StyledIcon = styled.a`
	height: 100%;
	padding: 1rem;

	* {
		font-size: 2.5rem;
		color: white;
	}
`

const StyledSidebarToggleButton = styled.button`
	cursor: pointer;
	padding: 1.75rem;
	height: 100%;

	border: none;
	background-color: transparent;

	color: white;
	font-size: 1.25rem;

	/* not 650px because then it won't show the button when the screen size is exactly 650px */
	@media only screen and (min-width: 651px) {
		display: none;
	}
`

const StyledDimmer = styled(Dimmer)`
	z-index: 0 !important;
`

const NavLinks = [
	{ url: "/", text: "Home", icon: "home" },
	{ url: "/gallery", text: "Gallery", icon: "images" },
	{ url: "/map", text: "Map", icon: "map marker alternate" },
]

const NavButtons = NavLinks.map((elem) => {
	return (
		<Link to={elem.url}>
			<Button primary size="big" content={elem.text} />
		</Link>
	)
})

const SidebarNavButtons = NavLinks.map((elem) => {
	return (
		<Link to={elem.url}>
			<Menu.Item as={elem.text}>
				<Icon name={elem.icon as SemanticICONS} />
				{elem.text}
			</Menu.Item>
		</Link>
	)
})

function Navbar() {
	const [isSidebarVisible, setSidebarVisibility] = useState(false)

	return (
		<StyledNav>
			<Logo to="/">
				<img alt="LP logo" src="img/llama.png" />
				LPMC
			</Logo>

			<StyledRightButtons>
				<Navigation>{NavButtons}</Navigation>

				{/* Discord Icon */}

				<StyledIcon href="https://discord.gg/2fsar34APa" target="_">
					<FontAwesomeIcon icon={faDiscord} />
				</StyledIcon>

				{/* Github icon */}

				<StyledIcon
					href="https://github.com/developomp/lpmc.developomp.com"
					target="_"
				>
					<FontAwesomeIcon icon={faGithub} />
				</StyledIcon>

				{/* Sidebar toggle button */}

				<StyledSidebarToggleButton
					onClick={() => setSidebarVisibility((prev) => !prev)}
				>
					<FontAwesomeIcon icon={faEllipsisV} />
				</StyledSidebarToggleButton>
			</StyledRightButtons>

			<StyledDimmer active={isSidebarVisible} inverted page />
			<Sidebar
				animation="overlay"
				as={Menu}
				icon="labeled"
				inverted
				onHide={() => setSidebarVisibility(false)}
				width="thin"
				vertical
				visible={isSidebarVisible}
			>
				{SidebarNavButtons}
			</Sidebar>
		</StyledNav>
	)
}

export default Navbar
