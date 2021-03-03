<template>
	<div class="gallery">
		<h1>Gallery</h1>
		<VuePictureSwipe
			:items="[
				{
					src: 'https://mc.developomp.com/img/lobby.png',
					thumbnail: 'https://mc.developomp.com/img/lobby.thumb.png',
					w: 1600,
					h: 900,
					title: 'Lobby',
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
