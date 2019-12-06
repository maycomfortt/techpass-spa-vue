<template>
  <section class="sgds-section">
    <div class="sgds-container is-fullhd">
      <div class="row sidenav-container" style="position: relative">
        <div class="col is-2 is-hidden-touch sidenav">
          <aside class="sidebar__inner sgds-menu" style="position: relative;">
            <ul class="sgds-menu-list">
              <div class="row">
                <div class="col">
                  <li>
                    <p class="has-text-justified">
                      This is a sample application to help you visualize how TechPass works.
                      <br>
                      <br>Explore the API to follow through how the redirect works. See what calls are being made, and what data is being returned.
                      <br>
                    </p>
                  </li>
                </div>
              </div>
            </ul>
          </aside>
        </div>
        <div class="col is-8 is-12-touch is-offset-1-desktop">
          <router-view/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
sgds-section {
  min-height: 100vh;
}
</style>
