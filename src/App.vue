<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import Index from './components/Index';
import Work from './components/Work';

export default {
  name: 'app',
  components: {
    Index,Work
  }
}
</script>

<style>
    *{
      margin:0px;
      padding:0px;
    }

    body{
      min-width:1300px;
      background:#f4f4f3;
    }

    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a{
      text-decoration: none;
      color:#000;
    }

   .flex{
      display:flex;
    }

    .clear{
      clear:both;
    }

    #app .back-red{
       background:linear-gradient(#6a0709,transparent);
    }

    .deep-grey{
      color:#696969;
    }

    .middle-content{
       position:relative;
    }

    .work-right-img{
      position:absolute;
      width:17%;
      right:0px;
      top:0px;
    }

    .work-right-img{
       width:26.7%;
     }

    .work-bottom-img{
       width:21.6%;
       position:absolute;
       right:6px;
       bottom:10px;
    }

    .word-small{
      font-size:12px;
    }

    .title-line{
      margin: 0px auto;
      display: inline-block;
      border-bottom: 1px solid #cecece;
    }

    .about-title{
      width:70%;
    }

    .about-list{
      margin-top:36px;
      font-size:14px;
      line-height:26px;
    }

    .indent{
      text-indent: 2em;
    }

    .title-backImg{
      width:134px;
      height:34px;
      text-align: center;
      line-height: 32px;
      padding-right: 24px;
      box-sizing: border-box;
      background:url("./assets/title_back.png") no-repeat;
      background-size:100% 100%;
      color:#fff;
    }

    .text-blue{
      color:#6f94a4;
    }
</style>
