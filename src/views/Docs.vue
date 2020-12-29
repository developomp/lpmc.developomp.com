<template>
	<Navbar />
	<div class="docs">
		<h1>Docs</h1>
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
	.docs {
		text-align: center;
		height: 2000px;
	}
</style>
