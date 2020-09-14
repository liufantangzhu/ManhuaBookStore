	<template>
		<div class="well mybody2">
			<span><h3 class="marginnone">AlbumList</h3></span><hr>

				<div class="well col-xs-12 paddingnone" >
					<div class="col-xs-2 col-sm-2 col-md-3 paddingnone">
				    <a href="#" class="thumbnail marginnone">
				      <img src="@/assets/img/mover.jpg" alt="">
				    </a>
				  </div>
				  <div class="col-xs-10 col-sm-10 col-md-9">
						<h4 class="">电影影视</h4>
						<p class="help-block marginnone">经典电影配乐</p>
				  </div>
				</div>
				
				<div class="well col-xs-12 paddingnone" >
					<div class="col-xs-2 col-sm-2 col-md-3 paddingnone">
				    <a href="#" class="thumbnail marginnone">
				      <img src="@/assets/img/music_1.jpg" alt="">
				    </a>
				  </div>
				  <div class="col-xs-10 col-sm-10 col-md-9">
						<h4 class="">欧美流行</h4>
						<p class="help-block marginnone">欧美流行乐曲</p>
				  </div>
				</div>

				<div class="well col-xs-12 paddingnone" >
					<div class="col-xs-2 col-sm-2 col-md-3 paddingnone">
				    <a href="#" class="thumbnail marginnone">
				      <img src="@/assets/img/game.jpg" alt="">
				    </a>
				  </div>
				  <div class="col-xs-10 col-sm-10 col-md-9">
						<h4 class="">游戏背景</h4>
						<p class="help-block marginnone">游戏恢弘配乐</p>
				  </div>
				</div>
		</div>
	</template>

	<script>
		export default{
		name:'AlbumList',
		  components: {

		  },
			data(){
				return{

				}
			}

		};
	</script>

	<style scoped>
		.paddingnone{
			padding:0;
			margin:none;
		}
		.marginnone{
			margin:0px;
		}
		.inline{
			display:inline;
		}
	</style>

