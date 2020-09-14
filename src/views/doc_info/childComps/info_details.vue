	<template>
		<div>
			<div class="left_list" >
          <div class="mybody-out">
            <div class="well mybody2">
              <div class="mytitle text-center">
                <button class="btn btn-xs label-info mytitle-group-item">
                  <span><h3>{{docinfo.title}}</h3></span>
                </button>
              </div><br>
              <div class="mytitle-group col-xs-12">
                <button class="btn btn-xs label-warning mytitle-group-item">
                  <span class="glyphicon glyphicon-calendar">{{docinfo.creat_date}}</span>
                </button>&nbsp
                <button class="btn btn-xs label-warning mytitle-group-item">
                  <span class="glyphicon glyphicon-eye-open">{{docinfo.hot}}</span>
                </button>
              </div><hr>
              <div class="img-border well mybody2">
                <div class="image">
                  <img :src="getdocimg()" alt="" >
                </div><br> 
              <div class="alert alert-warning">
                <p v-html="docinfo.content">{{docinfo.content}}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
		</div>
	</template>

	<script>
		export default{
		name:'InfoDetail',
		props:{
			docinfo:{
				type:Object,
			},
			docid:{
				type:String,
			}
		},
		methods:{
			getdocimg:function(){
        let _vue=this
	      //拼接图片地址
	      return  _vue.doc_img_url+this.docid+'.jpg';
        
    	},
		}


		}
	</script>

	<style scoped>

	</style>

