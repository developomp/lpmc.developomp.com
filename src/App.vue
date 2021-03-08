<template>
	<Navbar />
	<router-view />
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue"

export default {
	components: {
		Navbar,
	},
}
</script>

<style lang="scss">
$cyanColor: #b8c6e9;
$vlackColor: #2b3134;

html,
body {
	font-family: Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: white;
	margin: 0px;
	padding: 0px;
}
#app {
	padding-top: 80px;
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
</style>
