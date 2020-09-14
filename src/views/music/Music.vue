	<template>
		<div class="container">
			<div class="row">
				<div class="col-md-7">
					<!-- 当前播放 -->
					<div class="mybody-out">
					<div class="well mybody2">
						<div class="row">
						  <div class="col-xs-5 col-md-3">
						    <a href="#" class="thumbnail">
						      <img src="@/assets/img/music.jpg" alt="">
						    </a>
						  </div>
						  <span><h3 class="marginnone">{{songname}}</h3></span><hr>
						  <span>歌手：<a href="">{{singer}}</a></span>
						  <span class="col-xs-offset-1">2020-1-29 创建</span> 
						</div>
					</div></div>
					<!-- 歌曲列表 -->
					<div class="mybody-out">
					<div class="well mybody2">	
					  <span><h3 class="marginnone">歌曲列表</h3></span><hr>
					  <table class="table table-striped">
					  	<thead>
					  		<tr>
							  	<th colspan="2"></th>
							  	<th>曲名</th>
							  	<th>时长</th>
							  	<th>歌手</th>
							  	<th>专辑</th>  
							  </tr>
					  	</thead>
					  	<tbody>
					  		<tr v-for="(item,index) in songlist" :class="{'playing':index==playingindex}">
					  			<td><span>{{index+1}}</span></td>
							  	<td @click="listplay(item.id,index)">
							  		<span class="glyphicon glyphicon-play-circle"></span>
							  	</td>
									<td>{{item.title}}</td>
									<td>{{fixtime(item.time)}}</td>
									<td>{{item.singer}}</td>
									<td>{{item.album}}</td> 
							  </tr>
					  	</tbody>				  				  
						</table>
				</div>

				</div></div>
				<div class="col-md-4 ">
					<div class="mybody-out">
						<!-- 歌单 -->
						<AlbumList></AlbumList>
					</div>
					
				</div>
				<audio :src="playing" id="audioPlayer"></audio>
				<!-- 底部导航 -->
				<!-- <Mfooter :songname='songname'></Mfooter> -->
				<div class="m-out">
					<div class="navbar navbar-inverse navbar-fixed-bottom Mnav" role="navigation">
						<div class="Mnavbefore" @click="changenavbar()" :class="{'m-afterhide':this.Mnavbar}">
						</div>
						<div class="m-truebody" :class="{'m-hide':this.Mnavbar}">
							<div class="container">
								<div class="nav navbar-fluid text-center">
									<div class="m-contrl">
										<ul class="nav navbar-nav col-xs-12" id="navbar" >
											<li class="col-xs-1 col-sm-1 col-md-1 paddingnone">
												<a @click="prev_play">
													<span class="glyphicon glyphicon-fast-backward"></span><br>
													<div>上一曲</div>
												</a>
											</li>
											<li class="col-xs-1 col-sm-1 col-md-1 paddingnone">
												<a @click="audio_play" id="music_play">
													<div v-if="!isplay">
														<span class="glyphicon glyphicon-play"></span>
														<div>播放</div>
													</div>
													<div v-else>
														<span class="glyphicon glyphicon-pause"></span>
														<div>暂停</div>
													</div>									
												</a>
											</li>
											<li class="col-xs-1 col-sm-1 col-md-1 paddingnone">
												<a @click='next_play'>
													<span class="glyphicon glyphicon-fast-forward"></span>
													<div>下一曲</div>
												</a>
											</li>
											<!-- 进度条 -->
											<li class="col-xs-6 col-sm-6 col-md-6">
												<a>
													<div class="Mtitle">
														{{songname}}
														<span class="pull-right">{{c_time}}/{{d_time}}</span>
													</div>									
													<div class="progress Mbar" @click='reset_progress'>
													  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" :style="{width: audio_progress+'%'}">									  </div>
													</div>
												</a>								
											</li>
											<li class="col-xs-1 col-sm-1 col-md-1 paddingnone">
												<a :href="playing" download="songname" target="view_window">
													<span class="glyphicon glyphicon-download-alt"></span>
													<div>下载</div>
												</a>
											</li>
											<li class="col-xs-1 col-sm-1 col-md-1 paddingnone" >
												<a>
													<span class="glyphicon glyphicon-volume-up"></span>
													<div>音量</div>
												</a>
											</li>
											<li class="col-xs-1 col-sm-1 col-md-1 paddingnone">
												<a>
													<span class="glyphicon glyphicon-share"></span>
													<div>分享</div>
												</a>
											</li>
										</ul>
									</div>
								</div>		
							</div>
						</div>
					</div>
				</div>	
			</div>
		</div>	

	</template>

	<script>
	import AlbumList from "./childComps/album_list"
	import {get_songlist} from "@/network/music";
	let audioInterval;
		export default{
		name:'music',
		  components: {
		  	AlbumList
		  },
			data(){
				return{
					songlist:[],
					playingindex:"-1",
					playing:"",
					songname:"播放曲目",
					singer:"singer",
					Mnavbar:true,
					audio_progress:0,
					c_time:"00:00",
					d_time:"00:00",
					isplay:false,
					baseUrl:"http://localhost/xiaoxianyu/music/"
				}
			},
			methods:{
				fixtime(str){
					return str.substr(3,5);
			  },
			  listplay(id,index){
			  	this.playing=this.baseUrl+id+".mp3";
			  	this.playingindex=index;
			  	this.songname=this.songlist[index].title;
			  	this.singer=this.songlist[index].singer;
			  	this.audio_list_play()
			  },
			  set_progress(){
	  		  audioInterval = setInterval(()=>{
	  			let audio=document.getElementById('audioPlayer');
	  			let playbutton=document.getElementById('music_play');
	  			if(audioPlayer.ended){
            //播放结束后重置数据
            this.c_time="00:00";
            audio.currentTime = 0;
            this.d_time='00:00';
            this.isPlay=false;
            
            if(this.playingindex<this.songlist.length-1){
            	this.playingindex+=1
            	let index=this.playingindex
            	this.songname=this.songlist[index].title;
			  			this.singer=this.songlist[index].singer;
			  			this.playing=this.baseUrl+this.songlist[index].id+".mp3";
			  			setTimeout(()=>playbutton.click(),1000);
            }else{
            	this.playingindex=0
            	this.songname=this.songlist[0].title;
			  			this.singer=this.songlist[0].singer;
			  			this.playing=this.baseUrl+this.songlist[0].id+".mp3";
			  			setTimeout(()=>playbutton.click(),1000);
            }
            clearInterval(audioInterval);
          }
		  		this.c_time=parseInt(audio.currentTime / 60)+ ':' + parseInt(audio.currentTime%60);
		  		this.d_time=parseInt(audio.duration / 60)+ ':' + parseInt(audio.duration%60);
		  		return this.audio_progress=(audio.currentTime/audio.duration*100).toFixed(2);
			  	},500);
		  		
		  	},
		  	audio_play(){
		  		let audio=document.getElementById('audioPlayer');
		  		if(audio.paused){
                audio.play();
                this.isplay=true;
                this.set_progress();
            }else{
                audio.pause();
                this.isplay=false;
                clearInterval(audioInterval);
            }
		  	},
		  	audio_list_play(){
		  		let audio=document.getElementById('audioPlayer');
		  		let playbutton=document.getElementById('music_play');
		  		if(audio.paused){
            this.isplay=true;
	   
	          setTimeout(()=>playbutton.click(),1);
            }else{
	           setTimeout(()=>playbutton.click(),1);
	            this.isplay=false;
	            clearInterval(audioInterval);
            }
		  	},
		  	next_play(){
		  		let playbutton=document.getElementById('music_play');
		  		if(this.playingindex<this.songlist.length-1){
            	this.playingindex+=1
            	let index=this.playingindex
            	this.songname=this.songlist[index].title;
			  			this.singer=this.songlist[index].singer;
			  			this.playing=this.baseUrl+this.songlist[index].id+".mp3";
			  			setTimeout(()=>playbutton.click(),1000);
            }else{
            	this.playingindex=0
            	this.songname=this.songlist[0].title;
			  			this.singer=this.songlist[0].singer;
			  			this.playing=this.baseUrl+this.songlist[0].id+".mp3";
			  			setTimeout(()=>playbutton.click(),1000);
            }
          },
        prev_play(){
		  		let playbutton=document.getElementById('music_play');
		  		if(this.playingindex==0){
            	this.playingindex=this.songlist.length-1
            	let index=this.playingindex
            	this.songname=this.songlist[index].title;
			  			this.singer=this.songlist[index].singer;
			  			this.playing=this.baseUrl+this.songlist[index].id+".mp3";
			  			setTimeout(()=>playbutton.click(),1000);
            }else{
            	this.playingindex-=1
            	let index=this.playingindex
            	this.songname=this.songlist[index].title;
			  			this.singer=this.songlist[index].singer;
			  			this.playing=this.baseUrl+this.songlist[index].id+".mp3";
			  			setTimeout(()=>playbutton.click(),1000);
            }
          },
		  	reset_progress:function(e){
		  		let audio=document.getElementById('audioPlayer');
		  		let rect = e.target.getBoundingClientRect();
		  		let left=e.clientX;
		  		let width=left-rect.x;
		  		var scale = width / rect.width;
		  		let currentTime = audio.duration * scale;
		  		audio.currentTime = currentTime;
		  		return this.audio_progress= scale;
           
		  	},
		  	changenavbar(){
			  	this.Mnavbar=!this.Mnavbar
			  }
			  
			},
			created(){
			    get_songlist().then(res=>{
			      this.songlist=res;
			      this.playingindex=0;
			      this.songname=this.songlist[0].title;
			  			this.singer=this.songlist[0].singer;
			  			this.playing=this.baseUrl+this.songlist[0].id+".mp3";      
			    }
			      );
 			},
 			deactivated(){
 				this.isplay=false;
		  	clearInterval(audioInterval);
		  },
		};
	</script>

	<style scoped>
		.marginnone{
			margin:0px;
		}
		.playing{
			color:#DD001B;
		}
		.Mnav{
		background:rgba(0,0,0,0);	
		border:none;
	}
	.Mnavbefore{
		display:fixed;
    width:100px;
    border: 16px solid transparent;
    border-bottom: 16px solid rgba(0,0,0,0.77);
    position:relative;
    bottom:0px; 
    left: 50%;
    transform: translate(-50%,0);
	}
	.m-hide{
		display:none;
	}
	.m-afterhide{
		bottom:-18px; 
	}
	.m-truebody{
		background:rgba(0,0,0,0.77);
		opacity: 1;
		box-shadow: 0px 0px 21px 3px rgba(0,0,0,0.35);
		min-width:1000px;	
		transition: box-shadow 1.5s;
		-moz-transition: box-shadow 1.5s; /* Firefox 4 */
		-webkit-transition:box-shadow 1.5s; /* Safari 和 Chrome */
		-o-transition: box-shadow 1.5s; 
	}
	.m-truebody:hover{
		box-shadow: 0px 0px 21px 7px rgba(0,0,0,0.5);
	}
	.Mtitle{
		margin-top:-3px;
		text-align:left;
		color:#ffffff;
		margin-bottom:10px;
	}
	.Mbar{
		position:relative;
		margin-bottom:0;
		height:7px;
	}
	.m-contrl{
		font-size: .5rem;
	}
	.paddingnone{
		padding:0;
		}
	</style>

