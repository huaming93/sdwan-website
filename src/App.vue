<template>
  <div id="app">
    <div class="logo">
      <logo></logo>
    </div>
    <div class="description">
      <Description></Description>
    </div>
    <div id="nav">
      <div class="menu">
        <router-link to="/about" :class="['pb', {'active' : activeMenu === 1}]" @click.native="shiftMenu(1)">
          <span class="prefix">关于</span>
        </router-link>
        <router-link to="/sass" :class="['pb', {'active' : activeMenu === 2}]" @click.native="shiftMenu(2)">
          <span class="prefix">应用</span>
          <span class="postfix">加速</span>
        </router-link>
        <router-link to="/ecommerce" :class="['pb', {'active' : activeMenu === 3}]" @click.native="shiftMenu(3)">
          <span class="prefix">跨境</span>
          <span class="postfix">电商</span>
        </router-link>
        <router-link to="/more" :class="['pb', {'active' : activeMenu === 4}]" @click.native="shiftMenu(4)">
          <span class="prefix">更多场景</span>
        </router-link>
        <router-link to="/contact" :class="['pb', {'active' : activeMenu === 5}]" @click.native="shiftMenu(5)">
          <span class="prefix">联系我们</span>
        </router-link>
      </div>
    </div>
    <router-view class="container"/>
    <Slogan class="container"></Slogan>
    <Faq class="container"></Faq>
    <Copyright  class="container"></Copyright>
  </div>
</template>

<script>
import Logo from "./components/Logo";
import Description from "./components/Description";
import Slogan from "./components/Slogan";
import Faq from "./components/Faq";
import Copyright from "./components/Copyright";
export default {
  components: {
    logo: Logo,
    Description,
    Slogan,
    Faq,
    Copyright
  },
  data() {
    return {
      activeMenu: 1
    }
  },
  methods: {
    shiftMenu(index) {
      this.activeMenu = index
    }
  }
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  background-color: #000;
  color: #f90;
  font-family: Arial,Helvetica,sans-serif;
}
a {
  color: #f90;
  text-decoration: none;
}
.logo,
.description {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0px;
}
.menu {
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 700;
}
.pb {
  position: relative;
}
.pb.active::after {
  content: '';
  position: absolute;
  left: 0px;
  top: 120%;
  width: 100%;
  height: 2px;
  background-color: #f90;
}
.pb .prefix {
  color: #fff;
  padding: 2px;
}
.pb .postfix {
  color: #000;
  background-color: #f90;
  padding: 2px;
  border-radius: 3px;
}
.yb .prefix{
  color: #fff;
  padding: 2px;
}
.yb .postfix{
  color: #fff;
  background-color: #ff0000;
  padding: 2px;
  border-radius: 3px;
  letter-spacing: -1px;
}
.vph{
  text-align: center;
}
.vph .prefix{
  margin: 0px;
  color:#fff;
}
.vph .postfix{
  margin: 0px;
  color: #000;
  background-color: #f90;
  padding: 2px;
  border-radius: 3px;
}
span.disable{
  color:#777 !important;
  font-weight: 500;
}
.container{
  width: 60%;
  padding: 20px 20%;
}
.button{
     display: inline-block;
    zoom: 1;
    line-height: normal;
    white-space: nowrap;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    -webkit-user-drag: none;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    box-sizing: border-box;
    font-family: inherit;
    font-size: 100%;
    padding: 0.5em 1em;
    color: #000;
    border: 1px solid #999;  /*IE 6/7/8*/
    border: none rgba(0, 0, 0, 0);  /*IE9 + everything else*/
    background-color: #f90;
    text-decoration: none;
    border-radius: 2px;
}
.tooltip-inner {
    background: #666;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }
</style>
