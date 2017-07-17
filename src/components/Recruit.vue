 <template>
   <div id="recruit">
      <div class="flex middle-content">
        <leftSide></leftSide>
        <div class="right-content">
            <div class="about-list">
                <p class="title-line"><img src="../assets/recruit_title.png" class="about-title"/></p>
                <p class="deep-grey word-small">Ge she only mandarin dubbin gteam</p>
            </div>
            <div class="about-list">
                <p class="indent">阁色惟一专注做视频配音已经蛮久的，现在想着大家对音频什么的感兴趣可以多方面发育一下（如：素材剪辑故事、原创广播剧、创意条漫），所以长期招募以下人员：</p>
            </div>
            <div class="about-list">
                <p class="title-backImg">CV配音</p>
                <p>能驾驭角色，善于沟通、不拖音、有一定视频录音基础。人品为上。</p>
                <p class="text-blue">驾驭范围：</p>
                <p>TVB、欧美译制、日韩译制、国产影视、游戏、动画，能驾驭视频面孔且戏感突出；</p>
                <p class="text-blue">声线范围：</p>
                <p>（男）小生（16-21）/青年（22-26）/青叔（27-45）/老生（46+）</p>
                <p>（女）青衣（18-25）/ 老旦（45+） </p>
            </div>
             <div class="about-list">
                  <p class="title-backImg">编剧</p>
                  <p>能原创、也能根据组里的要求对剧本进行调整和修改，善于沟通；</p>
                  <p class="text-blue">要求：</p>
                  <p>时间充裕的话不做社团要求；</p>
                  <p>能独立或者合作完成组内命题编剧任务；</p>
                  <p>故事内容符合逻辑，剧情精致，具有可推敲性；</p>
                  <p>微广播剧时长5-10分钟（个别剧情较好可以适当放宽时长）；</p>
                  <p>具有丰富的想象力，写剧本时注意后期提示；</p>
                  <p>善于沟通，能虚心接受意见和建议；</p>
                  <p>不无故消失，有责任心；</p>
                  <p>招募期间，题材不限、命题不限。</p>
                  <p class="text-blue">声线范围：</p>
                  <p>（男）小生（16-21）/青年（22-26）/青叔（27-45）/老生（46+）</p>
                  <p>（女）青衣（18-25）/ 老旦（45+） </p>
              </div>
              <div class="about-list">
                  <p class="title-backImg">后期</p>
                  <p>擅长AA、CUBASE、Samplitude 以及任何一种音频编辑软件或者AE、PR、FL、会声会影等任何一种视频编辑软件制作音频以及视频；</p>
                  <p class="text-blue">要求：</p>
                  <p>会铺视频音频背景带；</p>
                  <p>时间充裕的话不做社团要求；</p>
                  <p>能独立或者合作完成组内命题后期任务；</p>
                  <p>具有丰富的想象力，后期场景搭建能力强；</p>
                  <p>善于沟通，能虚心接受意见和建议；</p>
                  <p>不无故消失，有责任心；</p>
                  <p>招募期间可发之前作品（5-10分钟）。</p>
                  <p class="text-blue">应招文件要求：</p>
                  <p>【应招】-原剧名-后期ID.MP3 ；</p>
                  <p>稍微介绍一下制作的故事，简短且清晰。</p>
              </div>
              <div class="about-list">
                  <p class="title-backImg">美工</p>
                  <p>会使用PS、SAI、OC以及任何一种绘画软件原创或者创意海报作品；</p>
              </div>
              <div class="about-list">
                  <p class="title-backImg">策划</p>
                  <p>擅长沟通，对自己策划的作品可以及时完成；</p>
              </div>
               <div class="about-list text-blue">
                    <hr class="dash-line" />
                    <p>备注： 对本组不了解的同学可以百度：阁色惟一中文配音组  找到简介和作品做一下简单了解 确定一条龙同学，请务必对自己以及组有责任心。</p>
                    <hr class="dash-line" />
                    <p>营养群：77497542</p>
                    <p>作品发QQ邮箱：985945317@QQ.COM</p>
                </div>
        </div>
        <img src="../assets/recruit_right.png" class="work-right-img"/>
      </div>
      <foot></foot>
   </div>
 </template>

 <script>
 import Foot from './Foot';
 import LeftSide from './LeftSide'

 export default {
   name: 'recruit',
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

  .about-list:not(:last-child){
    color:#8e8e8e;
  }

  .title-backImg{
    margin:0px auto;
    margin-bottom:25px;
  }

  .title-line{
    width:70%;
  }

  .about-title{
    width:90%;
  }

  .dash-line{
    width:38.6%;
    margin:10px auto;
    border:none;
    border-top:1px dashed #6f94a4;
  }

  .work-right-img {
      width: 23.7%;
  }
 </style>
