 <template>
   <div id="leftSide">
       <img src="../assets/left_back.png" class="left-gese"/>
        <div class="title">
           <router-link to="/Index">
             <img src="../assets/left_title_1.png" />
           </router-link>
           <router-link to="/Work">
             <img src="../assets/left_title_2.png" />
           </router-link>
           <router-link to="/Station">
             <img src="../assets/left_title_3.png" />
           </router-link>
           <router-link to="/About">
             <img src="../assets/left_title_4.png" />
           </router-link>
           <router-link to="/Contact">
             <img src="../assets/left_title_5.png" />
           </router-link>
           <router-link to="/Recruit">
             <img src="../assets/left_title_6.png" />
           </router-link>
        </div>
        <div class="clear"></div>
   </div>
 </template>

 <script>

 export default {
   name: 'leftSide',
 }

 var wlh = window.location.href ;

 </script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
    #leftSide{
      width:21.7%;
      background:#191d26;
    }

    #leftSide img{
      width:100%;
    }

    #leftSide .title a{
      display:inline-block;
      text-align:right;
      padding:10px 5.2% 10px 24.5%;;
      width:60%;
      background:linear-gradient(to right,transparent,#000);
      float:right;
      margin-bottom:10px;
      box-sizing: border-box;
    }


 </style>
