<template>
	<div class="home">
		<h1>Home</h1>
		<img alt="LPMC logo" src="/img/llama.png" />
		<br />
		<br />
		<a class="link" href="https://stats.uptimerobot.com/L0NZgsP0ng" target="_">Check server status</a>
		<br />
		<br />
		<!--div class="status"><fa icon="server" type="fa" width="16" /> <b>SMP SERVER</b><br />Player: XX/XX</div-->
		<!--a href="https://github.com/developomp/lpmc.developomp.com"><fa icon="github" type="fab" width="32" /></a-->
	</div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss">
$blueColor: #5d74ec;

.home {
	text-align: center;
	height: 2000px;
}

body {
	color: #2b3134;
}

.link:link,
.link:visited {
	background-color: $blueColor;
	border-radius: 25px;
	color: white;
	padding: 15px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}

.link:hover,
.link:active {
	background-color: blue;
}

.status {
	background-color: white;
	box-shadow: 1px 1px 4px #000000;
	border-radius: 25px;
	width: 250px;
	height: 100px;
	padding: 15px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
</style>
