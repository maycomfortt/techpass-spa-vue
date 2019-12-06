<template>
  <div class="row">
    <div class="col">
      <h4 class="has-text-primary has-text-left">
        <b>You are now logged out.</b>
      </h4>
      <p class="has-text-left">Click the button below to login.</p>
      <div class="row padding--top--lg">
        <div class="col is-12">
          <button
            class="sgds-button is-primary is-large is-fullwidth"
            @click="$router.push('/login')"
          >Login</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted: function() {}
};
</script>
<style scoped>
h4 {
  color: #a70300;
}
.sgds-button {
  background-color: #a70300;
}
</style>
