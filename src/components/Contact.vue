 <template>
   <div id="contact">
      <div class="flex middle-content">
        <leftSide></leftSide>
        <div class="right-content">
            <div class="about-list">
                <p class="title-line"><img src="../assets/about_title.png" class="about-title"/></p>
                <p class="deep-grey word-small">Ge she only mandarin dubbin gteam</p>
                <p class="word-small">声动影画、心韵演绎</p>
            </div>
            <div class="about-list deep-grey">
               <p>配音/编剧：2358602030</p>
               <p>游戏电影：250688305</p>
               <p>有声漫画：1085844841</p>
            </div>
            <div class="about-list deep-grey">
               <p>注：“阁色惟一”主要配音制作方向为BG向广播剧及视频，视频包括国产影视、韩剧、日剧、美剧英剧等。</p>
               <img src="../assets/contact_img.jpg" class="contact-img" />
            </div>
             <div class="about-list">
               <p class="work-name deep-grey">团队作品代表作：</p>
               <p>广告《爱室丽家居》《商业保理》等等</p>
               <p>游戏《星宿传奇》《坦克争霸》以及多款跑酷手游&卡牌游戏等等</p>
               <p>企业宣传片《龙子麒麟》《顶呱呱保险》等等</p>
               <p>游戏视频《火线笑传》《奔跑吧CFER》等等</p>
               <p>微电影《柚都警察》《哔门派的江湖》等等</p>
               <p>儿童项《魔术师的牙齿》《黑咕隆咚》《蜗牛岛》等等</p>
             </div>
        </div>
        <img src="../assets/about_right_top.png" class="work-right-img"/>
        <img src="../assets/about_right_bottom.png" class="work-bottom-img"/>
      </div>
      <foot></foot>
   </div>
 </template>

 <script>
 import Foot from './Foot';
 import LeftSide from './LeftSide'

 export default {
   name: 'contact',
   components: {
       Foot,LeftSide
   }
 }
 </script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
  .right-content{
    width:36%;
    margin-left:12.7%;
    margin-bottom:96px;
    text-align:center;
    color:#adacac;
  }

  .contact-img{
    width:20%;
    margin-top:15px;
  }

  .work-name{
    margin-bottom:36px;
  }
 </style>
