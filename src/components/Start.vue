<template>
  <div class="row">
    <div class="col">
      <h4 class="has-text-left">
        <b>TechPass Playground</b>
      </h4>
      <p
        class="has-text-justified padding--top--sm"
      >To get started, click the button below to login and you will be redirected to the AWS Cognito Hosted UI. If you have previously logged in, clicking the login button will show you your user information.</p>
      <div class="row padding--top--lg">
        <div class="col is-12">
          <button
            class="sgds-button has-text-white is-large is-fullwidth"
            @click="$router.push('/login')"
          >Login</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Start"
};
</script>
