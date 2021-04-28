<template>
	<div class="navbar">
		<router-link to="/" class="logo"><img alt="LP logo" src="img/llama.png" />LPMC</router-link>
		<div class="navigation">
			<router-link to="/">Home</router-link>
			<router-link to="/gallery">Gallery</router-link>
			<router-link to="/map">Map</router-link>
		</div>
		<div v-on:click="borgerClick($event)" class="borger">
			<div class="line1"></div>
			<div class="line2"></div>
			<div class="line3"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { useRouter } from "vue-router"

export default {
	setup() {
		const router = useRouter()

		return { router }
	},
	methods: {
		borgerClick(ev: Event) {
			/* todo: find only once */
			const borger: HTMLElement = document.querySelector(".borger") || new HTMLElement()
			const nav: HTMLElement = document.querySelector(".navigation") || new HTMLElement()
			const navLinks: NodeListOf<Element> = document.querySelectorAll(".navigation a")

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
		},
	},
}
</script>

<style lang="scss">
/* todo: fix bug where navigation links moving to the right is visible when reducing screen size */
$blueColor: #5d74ec;
@import url("https://fonts.cdnfonts.com/css/bloxat");

.navbar {
	position: fixed;
	top: 0;
	width: 100vw;
	height: 80px;
	margin: 0;
	padding: 0;
	box-shadow: 0 2px 5px grey;
	background-color: $blueColor;
	color: white;
	list-style-type: none;
	overflow: hidden;
}
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
}
.logo > img {
	width: 64px;
	height: 64px;
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
}
.navigation > a {
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
.navigation > a:hover {
	background-color: white;
	color: $blueColor;
}
.borger {
	position: absolute;
	display: none;
	flex-direction: column;
	justify-content: space-between;
	height: 24px;
	top: 50%;
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
	cursor: pointer;
}
.borger > div {
	width: 36px;
	height: 4px;
	border-radius: 2px;
	background-color: white;
	transition: all 0.3s ease;
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
		background-color: $blueColor;
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
</style>
