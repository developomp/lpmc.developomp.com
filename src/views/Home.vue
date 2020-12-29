<template>
	<Navbar />
    <div class="home">
        <h1>Home</h1>
    </div>
</template>

<script lang="ts">
	import Navbar from "@/components/Navbar.vue"
	import IsMobile from "ismobilejs"
	let isMobile: boolean = IsMobile(navigator.userAgent).any

	export default {
		components: {
			Navbar,
		}
	}
</script>

<style lang="scss">
	.home {
		text-align: center;
        height: 2000px;
	}
</style>
