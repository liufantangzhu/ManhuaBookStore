<template>

	<div class="collapse navbar-collapse xy-navbar-collapse">
		<ul class="nav navbar-nav" id="navbar">
			<slot></slot>
		</ul>
	</div>

</template>	

<script>
	export default {
  name: 'Hitem',
};
</script>

<style>
.navbar-nav{
color:red;
}
</style>