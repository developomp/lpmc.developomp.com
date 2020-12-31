<template>
	<div id="app">
		<Navbar />
		<router-view />
	</div>
</template>

<script lang="ts">
	import Navbar from "@/components/Navbar.vue"

	export default {
		components: {
			Navbar,
		}
	}
</script>

<style lang="scss">
	html, body{
		font-family: Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		margin: 0px;
		padding: 0px;
	}
	#app {
		padding-top: 40px;
	}
	body::-webkit-scrollbar {
		width: 0.4rem;
	}
	body::-webkit-scrollbar-track {
		background: #FFFFFF;
	}
	body::-webkit-scrollbar-thumb {
		background: #8a9dff;
	}
</style>
