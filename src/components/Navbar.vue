<template>
	<div class="navbar">
		<router-link to="/" class="logo"><img alt="LP logo" src="llama.png" />LPMC</router-link>
		<div class="navigation">
			<router-link to="/">Home</router-link>
			<router-link to="/news">News</router-link>
			<router-link to="/docs">Docs</router-link>
			<router-link to="/profile">Profile</router-link>
		</div>
	</div>
</template>

<script lang="ts">
	export default {}
</script>

<style lang="scss">
	$blueColor: #5D74EC;
	@font-face {
		font-family: logoFont;
		src: url("/fonts/Bloxat-PDoE.ttf");
	}
	.navbar {
		position: sticky;
		top: 0px;
		width: 100%;
		height: 80px;
		margin: 0px;
		padding: 0px;
		box-shadow: 0px 2px 5px grey;
		background-color: $blueColor;
		color: white;
		list-style-type: none;
		overflow: hidden;
	}
	.logo {
        display: flex;
		justify-content: space-between;
		align-items: stretch;
		position: absolute;
		margin: 0px;
		padding: 0px;
		top: 50%;
		left: 8px;
		width: 220px;
		height: 64px;
		line-height: 64px;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		text-decoration: none;
		font-family: logoFont;
		font-size: 320%;
		color: white;
	}
	.logo > img {
		width: 64px;
		height: 64px;
	}
	.navigation {
		position: absolute;
		display: flex;
		top: 50%;
		right: 10px;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	.navigation > a {
		font-size: 21px;
		text-decoration: none;
		color: white;
		line-height: 30px;
		height: 30px;
		width: 100px;
		margin-right: 5px;
		border-radius: 50vh;
		text-align: center;
	}
	.navigation > a:hover {
		background-color: white;
		color: $blueColor;
	}
</style>
