import { Link } from "react-router-dom"
import styled from "styled-components"

const blueColor = "#5d74ec"

const StyledNav = styled.nav`
	@import url("https://fonts.cdnfonts.com/css/bloxat");

	position: fixed;
	top: 0;
	width: 100vw;
	height: 80px;
	margin: 0;
	padding: 0;
	box-shadow: 0 2px 5px grey;
	background-color: ${blueColor};
	color: white;
	list-style-type: none;
	overflow: hidden;

	.logo {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		position: absolute;
		margin: 0;
		padding: 0;
		top: 50%;
		left: 8px;
		width: 220px;
		height: 64px;
		line-height: 75px; /* todo: find a less hacky solution */
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		text-decoration: none;
		font-family: "BLOXAT", sans-serif;
		text-transform: uppercase;
		letter-spacing: 5px;
		font-size: 3em;
		color: white;

		& > img {
			width: 64px;
			height: 64px;
		}
	}

	.navigation {
		position: absolute;
		display: flex;
		justify-content: space-between;
		top: 50%;
		right: 10px;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		font-family: Helvetica;

		& > a {
			font-size: 21px;
			text-decoration: none;
			list-style: none;
			color: white;
			letter-spacing: 2px;
			line-height: 30px;
			height: 30px;
			width: 100px;
			margin-right: 5px;
			border-radius: 50vh;
			text-align: center;
		}
		& > a:hover {
			background-color: white;
			color: ${blueColor};
		}
	}

	@media only screen and (max-width: 650px) {
		body {
			overflow-x: hidden;
		}
		.navigation {
			position: fixed;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			width: 50%;
			right: 10px;
			height: 30vh;
			top: 90px;
			background-color: ${blueColor};
			transform: translateX(110%);
			transition: transform 0.2s ease;
		}
		.navigation > a {
			opacity: 0;
		}
		.borger {
			display: flex;
			right: 20px;
		}
	}

	.active {
		transform: translateX(0%);
	}

	@keyframes navLinksFade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.toggle .line1 {
		transform: rotate(-45deg) translate(-5px, 9px);
	}

	.toggle .line2 {
		opacity: 0;
		width: 0;
	}

	.toggle .line3 {
		transform: rotate(45deg) translate(-5px, -9px);
	}
`

const StyledBorger = styled.div`
	position: absolute;
	display: none;
	flex-direction: column;
	justify-content: space-between;
	height: 24px;
	top: 50%;
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
	cursor: pointer;

	& > div {
		width: 36px;
		height: 4px;
		border-radius: 2px;
		background-color: white;
		transition: all 0.3s ease;
	}
`

function Navbar() {
	function borgerClick() {
		/* todo: find only once */
		const borger: HTMLElement =
			document.querySelector(".borger") || new HTMLElement()
		const nav: HTMLElement =
			document.querySelector(".navigation") || new HTMLElement()
		const navLinks: NodeListOf<Element> =
			document.querySelectorAll(".navigation a")

		borger.classList.toggle("toggle")
		nav.classList.toggle("active")
		navLinks.forEach((_link: Element, index: number) => {
			const link = _link as HTMLElement
			if (link.style.animation) {
				link.style.animation = ""
			} else {
				link.style.animation = `navLinksFade 0.6s ease forwards`
			}
		})
	}

	return (
		<StyledNav>
			<Link to="/" className="logo">
				<img alt="LP logo" src="img/llama.png" />
				LPMC Home
			</Link>

			<div className="navigation">
				<Link to="/">Home</Link>
				<Link to="/gallery">Gallery</Link>
				<Link to="/map">Map</Link>
			</div>

			<StyledBorger
				onClick={() => {
					borgerClick()
				}}
			>
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</StyledBorger>
		</StyledNav>
	)
}

export default Navbar
