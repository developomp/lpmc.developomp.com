<template>
	<Navbar />
    <div class="profile">
    	<h1>Profile</h1>
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
	.profile {
		text-align: center;
        height: 2000px;
	}
</style>
