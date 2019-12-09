<template>
  <div id="app">
    <div class="masthead-container">
      <Masthead/>
      <MainNav/>
    </div>
    <div class="content-container">
      <SideBar/>
    </div>
    <div class="footer-container">
      <Footer/>
    </div>
  </div>
</template>

<script>
import "sgds-govtech/css/sgds.css";
import "sgds-govtech-vue";
import Masthead from "./components/layout/Masthead";
import MainNav from "./components/layout/MainNav";
import Footer from "./components/layout/Footer";
import SideBar from "./components/layout/SideBar";
export default {
  name: "app",
  components: {
    Masthead,
    MainNav,
    Footer,
    SideBar
  }
};
</script>
