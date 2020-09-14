<template>
	<div>
		<canvas id="test" style="position: fixed; top: 0px; left: 0px; pointer-events: none;z-index:-10;"></canvas>
    <canvas id="t_bg" style="position: fixed; top: 0px; left: 0px; pointer-events: none;z-index:-12;"></canvas>
    <div class="full-image" style="display: none">
    	<img :src="item" alt="" v-for="item in imgarr">
    </div>
	</div>
</template>
<script>
export default{
name:'background',
components: {

},
data(){
	return{
		imgarr:[],
		baseUrl:""
	}
},
methods:{
},
deactived(){
	window.clearInterval(this.timer);
},
activated(){

},
mounted(){
	let newArr = [];
	for(let i=newArr.length;i<7;i++){
	  let num =parseInt(Math.random()*262+1);
		let isset =newArr.indexOf(num);
		if(isset==-1){
		  if(num<10){
		  	num="00"+num ; 
		  	let url=this.baseUrl+num+".jpg"
		  	this.imgarr.push(url);
		  }else if(num<100){
		  	num="0"+num; 
		  	let url=this.baseUrl+num+".jpg"
		  	this.imgarr.push(url);
		  }
		  else if(num>100 && num<999){
		  	let url=this.baseUrl+num+".jpg"
		  	this.imgarr.push(url);
		  }
	  }
	}
	let timer=setInterval(()=>{
		if(nowi>=this.imgarr.length){nowi=0}
		nowi++;i=nowi%(this.imgarr.length);
		nexti=nowi+1;ni=nexti%(this.imgarr.length);
		img.src=this.imgarr[i];img2.src=this.imgarr[ni];	

	},7000)
	let canvas = document.querySelector("#test");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	let canvas2 = document.querySelector("#t_bg");
		canvas2.width = window.innerWidth;
		canvas2.height = window.innerHeight;
	$(window).resize(function(){
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas2.width = window.innerWidth;
		canvas2.height = window.innerHeight;
	});
	let context = canvas.getContext('2d');let context2 = canvas2.getContext('2d');
	var topx=0;
	var topy=0;
	let img = new Image();let img2 = new Image();
	let nowi=0;
	let nexti=0;
	let i = 0;let ni = 0;

	let imgw=img.width;
	let imgh=img.height;
	let imgw2=img2.width;
	let imgh2=img2.height;
	let cw=canvas.width;let ch=canvas.height;let cw2=canvas2.width;let ch2=canvas2.height;
	img.onload = function(){
		imgw=img.width;
		imgh=img.height;
		
		let timer2=setInterval(
			()=>{
				window.clearInterval(timer1);
				topx=0;topy=0;cw=canvas.width;
			}
		,7000);
		let timer1= setInterval(function(){//判断比例，用宽度100%还是高度100%
			context.clearRect(0,0,canvas.width,canvas.height);
			$(window).resize(function(){
				cw=canvas.width;ch=canvas.height;topx=0;topy=0;
			});
			if (imgh*cw/imgw<ch){
				context.clearRect(0,0,canvas.width,canvas.height);
				context.drawImage(img,topy-=0.03,topx-=0.03,imgw*ch/imgh,ch+=0.06);
				
			}else{
				context.clearRect(0,0,canvas.width,canvas.height);
				context.drawImage(img,topy-=0.03,topx-=0.03,cw+=0.06,imgh*cw/imgw);
			}
		},1);
		var timer= setTimeout(function(){
			var timer3=setInterval(function(){//透明度渐降
				context.globalAlpha -=0.01;
				// context2.globalAlpha +=0.05;
			},20)
			setTimeout(function(){
				window.clearInterval(timer3);
				context.globalAlpha =1;
				// context2.globalAlpha =0;
			},2000)

		},5000);
	}
	img2.onload = function(){
		imgw2=img2.width;
		imgh2=img2.height;
		let timer22=setInterval(
			()=>{
				window.clearInterval(timer21);
				topx=0;topy=0;cw2=canvas.width;
			}
		,7000);
		let timer21= setInterval(function(){//判断比例，用宽度100%还是高度100%
			context2.clearRect(0,0,canvas.width,canvas.height);
			$(window).resize(function(){
				cw2=canvas2.width;ch2=canvas2.height;
			});
			if(imgh2*cw2/imgw2<ch2){
				context2.drawImage(img2,0,0,imgw2*ch2/imgh2,ch2);
			}else{
				context2.drawImage(img2,0,0,cw2,imgh2*cw2/imgw2);
			}
		},7);
	}

},
created(){
	let _vue=this;
	this.baseUrl=_vue.canvas_backgroup_url;
}
};
</script>

<style scoped>

</style>

	