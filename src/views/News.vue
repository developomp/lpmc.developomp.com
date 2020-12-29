<template>
	<Navbar />
	<div class="news">
		<h1>News</h1>
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
	.news {
		text-align: center;
		height: 2000px;
	}
</style>
