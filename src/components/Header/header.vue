<template>
	<header>
		<div class="navbar navbar-inverse navbar-fixed-top " role="navigation">
			<div class="container">
				<div class="nav navbar-fluid text-center">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed"  data-toggle="collapse" data-target=".xy-navbar-collapse" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>	
		      			<span class="icon-bar"></span>
		      			<span class="icon-bar"></span>
		     			<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand active">🦈小咸鱼网</a>	
					</div>
							<slot></slot>
						
				</div>
			</div>
		</div>
	</header>

</template>

<script>
export default {
  name: 'Header',
}
</script>




