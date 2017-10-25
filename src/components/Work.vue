 <template>
   <div id="work">
      <div class="flex middle-content">
        <leftSide></leftSide>
        <div class="right-content">
            <div class="prevue">
                <p>【阁色惟一】2017 预告</p>
            </div>
            <div class="video-list">
                <div class="video-item">
                    <div class="video-title flex">
                        <p class="title-backImg">影视动画</p>
                        <a href="#">查看更多&gt</a>
                    </div>
                    <div class="video-content flex">
                        <a href="#" class="video-box">
                            <div>
                                <img src="../assets/17173.png" />
                                <span class="s-play"></span>
                            </div>
                            <p>【阁色惟一】名称XXX</p>
                        </a>
                    </div>
                </div>
                <div class="video-item">
                    <div class="video-title flex">
                        <p class="title-backImg">广播剧</p>
                        <a href="#">查看更多&gt</a>
                    </div>
                    <div class="video-content flex">
                        <div class="video-box">
                            <div></div>
                            <p>【阁色惟一】名称XXX</p>
                        </div>
                        <div class="video-box">
                            <div></div>
                            <p>【阁色惟一】名称XXX</p>
                        </div>
                        <div class="video-box">
                            <div></div>
                            <p>【阁色惟一】名称XXX</p>
                        </div>
                        <div class="video-box">
                            <div></div>
                            <p>【阁色惟一】名称XXX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="../assets/work_right.png" class="work-right-img"/>
      </div>
      <foot></foot>
   </div>
 </template>

 <script>


 import Foot from './Foot';
 import LeftSide from './LeftSide'

 export default {
   name: 'work',
   components: {
       Foot,LeftSide
   }
 }
 </script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
    .right-content{
      margin-left:3.5%;
      width:64%;
      position: relative;
      z-index: 10;
    }

    .prevue{
      margin-top:28px;
      margin-bottom:6px;
    }

    .video-title{
      justify-content: space-between;
      align-items: center;
      margin-top:38px;
      margin-bottom:26px;
    }

     .video-title>a{
      color:#6f94a4;
     }

     .video-content{
      flex-wrap: wrap;
     }

     .video-content .video-box{
      margin-left:3.8%;
      margin-bottom:30px;
      width:21.2%;
      text-align:center;
      display:block;
     }

     .video-content .video-box>div{
      position:relative;
      width:100%;
      height:120px;
      margin-bottom:16px;
     }

     .video-content .video-box img{
     width:100%;
     height:100%;
     }

     .s-play{
     width:50px;
     height:50px;
     background:url("../assets/play_start.png") no-repeat;
     position:absolute;
     top:50%;
     left:50%;
     margin-left:-25px;
     margin-top:-25px;
     display:none;
     }
 </style>
