<template>
  <div class="sgds-masthead">
    <div class="sgds-container is-fullhd">
      <div class="row is-mobile">
        <div class="col">
          <a href="https://www.gov.sg" target="_blank">
            <span class="sgds-icon sgds-icon-sg-crest"></span>
            <span class="is-text">A Singapore Government Agency Website</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    name: 'Masthead'
})
export default class Masthead extends Vue { }
</script>
