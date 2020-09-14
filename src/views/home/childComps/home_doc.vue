<template>
	<div class="mybody-out">
		<div class="mybody2 well"  data-aos="fade-right">
			<router-link :to="{path:'/docinfo',query:{docid:docid}}">
				<div class="mytitle text-center">
					<span class="title_out">
						<slot name="doc-title"></slot>
					</span>
				</div><br>
				<div class="mytitle-group col-xs-12">
					<button class="btn btn-xs label-warning mytitle-group-item">
						<span class="glyphicon glyphicon-calendar">
							<slot name="creat_date"></slot>
						</span>
					</button>&nbsp
					<button class="btn btn-xs label-warning mytitle-group-item">
						<span class="glyphicon glyphicon-eye-open">
							<slot name="hot"></slot>
						</span>
					</button>
				</div><hr>
				<div class="img-border col-xs-12">
					<div class="image">
						<div class="info">
							<div class="img-info">
								<p><slot name="doc-cont"></slot></p>
							</div>
						</div>
						<slot name="doc-img"></slot>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
export default {
  name: 'Doc',
  props:{
  	docid:{
  		type:String,
  		default(){
  			return 1
  		}
  	}
  },
};
</script>

<style scoped>
.title_out{
	display: inline-block;
	padding: 0 10px 0;
	font-size: 22px;
	background: #1ec7e6;
  color: #fff;
  position: static;
  font-weight: bold;
  font:'微软雅黑',Verdana,Arial,Helvetica,sans-serif;
  padding: 2px;
  margin: 2px;
  border-radius: 5px;
  opacity: .8;
  line-height: 1.5;
}
</style>

