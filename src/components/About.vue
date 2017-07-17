 <template>
   <div id="about">
      <div class="flex middle-content">
        <leftSide></leftSide>
        <div class="right-content">
            <div class="about-list">
                <p class="title-line"><img src="../assets/about_title.png" class="about-title"/></p>
                <p class="deep-grey word-small">Ge she only mandarin dubbin gteam</p>
                <p class="word-small">声动影画、心韵演绎</p>
            </div>
            <div class="about-list">
                <p>组长：</p>
                <p>息~九泱</p>
                <p>副组长：</p>
                <p>金仙儿</p>
                <p>策划组：</p>
                <p>执灯/2丢/无涯/安若弥殿/桃子等</p>
                <p>编剧组：</p>
                <p>疯狂牛魔王/容子/玄夜诀/妍妍等</p>
                <p>美工租：</p>
                <p>芒づ果/水上行舟/安若弥殿等</p>
                <p>后期组：</p>
                <p>一片叶子、xufeifan、霍殇儿、yamashita曦、tulip、ZOE、玲珑浅醉等</p>
                <p>成立日：</p>
                <p>2010年7月1日</p>
            </div>
            <div class="about-list">
                <p>
                  网络配音团队。所有成员均因对配音的爱好集合到一起，本着“努力填坑，快乐做剧”
                  的宗旨，希望可以创建一个和谐愉快的配音环境。“阁色”=各色，代表配音人各自的
                  特点；
                </p>
                <p>“惟一”=唯一，是对做剧的专一。</p>
                <p>作品倾向BG向广播剧及视频（国产影视、韩剧、日剧、美剧英剧等）</p>
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
   name: 'about',
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
  }

  .about-list{
    color:#8e8e8e;
  }

  .about-list:nth-child(2) p:nth-child(odd){
    color:#696969;
  }
 </style>
