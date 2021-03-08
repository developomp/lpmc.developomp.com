<template>
	<div class="gallery">
		<h1>Gallery</h1>
		<VuePictureSwipe
			:items="[
				{
					src: '/img/lobby.png',
					thumbnail: '/img/lobby.thumb.png',
					w: 3840,
					h: 2160,
					title: 'Lobby (By: POMP)',
				},
				{
					src: '/img/IceBear/1.png',
					thumbnail: '/img/IceBear/1.thumb.png',
					w: 5120,
					h: 2880,
					title: 'Doggos (By: Ice Bear)',
				},
				{
					src: '/img/IceBear/2.png',
					thumbnail: '/img/IceBear/2.thumb.png',
					w: 5120,
					h: 2880,
					title: 'Bee farm (By: Ice Bear)',
				},
			]"
		></VuePictureSwipe>
	</div>
</template>

<script lang="ts">
import VuePictureSwipe from "vue-picture-swipe"

export default {
	components: {
		VuePictureSwipe,
	},
}
</script>

<style lang="scss">
.gallery {
	text-align: center;
	height: 2000px;
}
</style>
