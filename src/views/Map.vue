<template>
	<div class="map">
		<object class="overview" type="text/html" data="/overview"></object>
	</div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss">
.map {
	height: calc(100vh - 80px);
	width: 100%;
	background-color: black;
}

.overview {
	height: 100%;
	width: 100%;
}
</style>
