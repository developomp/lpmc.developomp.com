<template>
	<Navbar />
	<div class="not-found">
        <h1>Page Not Found</h1>
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
	.not-found {
		text-align: center;
		height: 2000px;
	}
</style>
