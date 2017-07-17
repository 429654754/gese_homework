 <template>
   <div id="foot" class="flex">
      <div class="foot-list flex">
          <div class="flex foot-logo">
              <img src="../assets/gese.png" />
          </div>
          <div class="web-name">
              <div class="web-list flex">
                   <span>我们的其他站点:</span>
                   <div class="flex">
                      <a href="#"><img src="../assets/xinlang.png" /></a>
                      <a href="#"><img src="../assets/chaoneng.png" /></a>
                      <a href="#"><img src="../assets/17173.png" /></a>
                      <a href="#"><img src="../assets/bili.png" /></a>
                      <a href="#"><img src="../assets/tudou.png" /></a>
                   </div>
              </div>
              <p class="remark flex">
                <span>做视频配音，不接耽美~联系QQ邮箱：985945317</span>
                <span>Copyright © 2009-2017 GSWY 阁色唯一中文配音工作室&nbsp&nbsp京ICP备12002058号</span>
              </p>
          </div>
      </div>
      <div class="ewm">
          <p>扫描联系</p>
          <img src="../assets/ewm.png" />
      </div>
   </div>
 </template>

 <script>
 export default {
   name: 'foot',
   data () {
     return {
       msg: 'Welcome to Your Vue.js App'
     }
   }
 }
 </script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
    #foot{
      width:100%;
      height:146px;
      background:#000;
      justify-content: center;
      align-items: center;
      position:relative;
    }

    .foot-logo{
      align-items: center;
      width:7%;
    }

    .foot-logo img{
      width:100%;
      height:auto;
    }

    .foot-list{
      width:70%;
      justify-content: space-between;
      color:#b5b4b4;
      font-size:12px;
    }

    .web-name{
      width:85%;
    }

    .web-list{
      text-align:left;
      align-items: center;
      margin-bottom:20px;
    }

    .web-list>div{
      justify-content: space-between;
      width:80%;
    }

    .web-list>div a{
      display:flex;
      justify-content: center;
      align-items: center;
      width:16%;
      background:#fff;
      border-radius:5px;
      padding:5px;
      box-sizing: border-box;
    }

    .web-list>div img{
      max-width:100%;
      max-height:100%;
    }

    .web-list>span{
      width:20%;
    }

    .remark{
      text-align:left;
      justify-content: space-between;
    }

    .ewm{
      position:absolute;
      right:4.6%;
      bottom:32px;
      width: 7%;
      max-width:132px;
      background:rgba(255,255,255,0.7);
      color:#373738;
      font-size:12px;
      text-align:center;
      border-radius:8px;
      border:1px solid #333;
      padding:6px 8px;
      box-sizing: border-box;
    }

    .ewm>p{
      margin-bottom:4px;
    }

    .ewm>img{
      width:100%;
    }
 </style>
