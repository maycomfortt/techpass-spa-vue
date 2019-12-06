<template>
  <div class="sgds-container is-fullhd">
    <nav class="sgds-navbar" role="navigation">
      <div class="sgds-navbar-brand">
        <a class="sgds-navbar-item">
          <img alt="Product Logo" src="../../assets/tp-logo.png" style="padding-right: 1rem">
          <h6>
            <b>TPlayground</b>
          </h6>
        </a>
        <div class="sgds-navbar-burger" data-target="mainnav-1">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
<!--      <div id="mainnav-1" class="sgds-navbar-menu">-->
<!--        <div id="nav">-->
<!--          <div class="sgds-navbar-start">-->
<!--            <router-link to="/start" class="sgds-navbar-item is-uppercase is-tab">Start</router-link>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainNav"
};
</script>

<style>
.sgds-navbar-item.is-tab.is-active {
  color: #a70300;
  border-bottom: 5px solid #a70300;
}
</style>
