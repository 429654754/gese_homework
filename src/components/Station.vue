 <template>
   <div id="station">
      <div class="flex middle-content">
        <leftSide></leftSide>
        <div class="right-content">
            <div class="station-list flex">
                <div class="station-left">
                    <div class="head-img">头像</div>
                    <p>主播：名称XX</p>
                    <a href="#">查看更多</a>
                </div>
                <div class="station-right flex">
                    <div class="station-item">
                        <div class="station-box"></div>
                        <p>作品名称XXX</p>
                    </div>
                     <div class="station-item">
                        <div class="station-box"></div>
                        <p>作品名称XXX</p>
                     </div>
                      <div class="station-item">
                         <div class="station-box"></div>
                         <p>作品名称XXX</p>
                      </div>
                </div>
            </div>

            <div class="station-list flex">
                <div class="station-left">
                    <div class="head-img">头像</div>
                    <p>主播：名称XX</p>
                    <a href="#">查看更多</a>
                </div>
                <div class="station-right flex">
                    <div class="station-item">
                        <div class="station-box"></div>
                        <p>作品名称XXX</p>
                    </div>
                     <div class="station-item">
                        <div class="station-box"></div>
                        <p>作品名称XXX</p>
                     </div>
                      <div class="station-item">
                         <div class="station-box"></div>
                         <p>作品名称XXX</p>
                      </div>
                </div>
            </div>

            <div class="station-list flex">
                <div class="station-left">
                    <div class="head-img">头像</div>
                    <p>主播：名称XX</p>
                    <a href="#">查看更多</a>
                </div>
                <div class="station-right flex">
                    <div class="station-item">
                        <div class="station-box"></div>
                        <p>作品名称XXX</p>
                    </div>
                     <div class="station-item">
                        <div class="station-box"></div>
                        <p>作品名称XXX</p>
                     </div>
                      <div class="station-item">
                         <div class="station-box"></div>
                         <p>作品名称XXX</p>
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
   name: 'station',
   components: {
       Foot,LeftSide
   }
 }
 </script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
    .right-content{
      width:64.8%;
      margin-left:2%;
      position:relative;
      z-index:10;
    }

    .station-list{
      margin-top:36px;
      background:#fff;
      border-radius:8px;
      padding:32px 3.2% 32px 3.2%;
      justify-content: space-between;
    }

    .station-list:last-child{
      margin-bottom:36px;
    }

    .station-left{
      width:10%;
      font-size:12px;
    }

    .head-img{
      height:80px;
      line-height:80px;
      text-align:center;
      background:#b7b7b7;
      color:#fff;
    }

    .station-left>p{
      margin-top:8px;
      margin-bottom:16px;
    }

    .station-left>a{
      width:100%;
      display:block;
      padding:4px 0px;
      text-align:center;
      background:#89abb5;
      border-radius:20px;
      color:#fff;
    }

    .station-right{
      width:74%;
      flex-wrap:wrap;
      overflow: hidden;
    }

    .station-item{
      width:28%;
      margin-right:5%;
      text-align:center;
      font-size:12px;
    }

    .station-box{
      width: 100%;
      height: 110px;
      background: #b7b7b7;
    }

    .station-item>p{
      margin-top:15px;
    }
 </style>
