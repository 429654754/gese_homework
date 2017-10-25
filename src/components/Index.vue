 <template>
   <div id="index">
       <div class="index-content">
           <img src="../assets/backImg.jpg" class="back-img" />
           <div class="logo">
              <img src="../assets/indexLogo.png" />
           </div>
           <div class="title flex">
              <router-link to="/Work">
                <img src="../assets/title_1.png" />
              </router-link>
              <router-link to="/Station">
                <img src="../assets/title_2.png" />
              </router-link>
              <router-link to="/About">
                <img src="../assets/title_3.png" />
              </router-link>
              <router-link to="/Contact">
                <img src="../assets/title_4.png" />
              </router-link>
              <router-link to="/Recruit">
                <img src="../assets/title_5.png" />
              </router-link>
           </div>
           <div class="video-appr">
                <p class="flex">
                    <i class="line"></i>
                    <span>视频欣赏</span>
                    <i class="line"></i>
                </p>
                <div class="video-box flex">
                    <div class="video-11"></div>
                    <div class="video-list">
                        <div class="video-22"></div>
                        <div class="video-22"></div>
                        <div class="video-22"></div>
                    </div>
                </div>
           </div>
       </div>
       <foot></foot>
   </div>
 </template>

 <script>
 import Foot from './Foot';

 export default {
   name: 'index',
   components: {
       Foot
   }
 }
 </script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
     .index-content{
       position:relative;
     }

     .index-content .logo{
        position:absolute;
        top:26px;
        left:20%;
        width:4.5%;
        max-width:100px;
        z-index:10;
     }

     .index-content .title{
        width:24%;
        max-width:464px;
        position:absolute;
        top:0px;
        left:50%;
        margin-left:-12%;
        justify-content:space-between;
        text-align:center;
     }

      .index-content .title a{
         display:inline-block;
         width:14%;
         background:linear-gradient(#000,transparent);
         padding: 5% 0px 18% 0px;
         box-sizing: border-box;
      }

      .title a img{
         width:40%;
      }

     .logo img{
        width:100%;
     }

     .back-img{
       width:100%;
       height:auto;
       display:block;
     }

     .video-appr{
       position:absolute;
       width:56.8%;
       top:27%;
       left:50%;
       margin-left:-20.4%;
     }

     .video-appr>p{
       width:33%;
       margin:10px auto;
       padding-right:28%;
       justify-content:space-between;
     }

     .video-appr .line{
       display:inline-block;
       width:30%;
       border-bottom:1px solid #333;
       margin-bottom: 5px;
     }

     .video-box{
       justify-content:space-between;
       width:100%;
     }

     .video-box>.video-11{
       width:73.5%;
       height:390px;
     }

     .video-list{
       width:22%;
       height:390px;
     }

     .video-list .video-22{
       height:30%;
     }

     .video-list .video-22:not(:last-child){
       margin-bottom:10%;
     }

     .video-11,.video-22{
       background:#000;
     }
 </style>
