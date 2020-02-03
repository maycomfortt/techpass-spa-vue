<template>
    <div class="sgds-container">
        <div class="row">
            <div class="col">
                <h4 class="margin--top--lg">
                    <span class="sgds-icon sgds-icon-circle-warning has-text-primary"></span> {{ title }} 
                </h4>
                <hr class="margin--top margin--bottom"/>
                <p>{{ message }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col has-text-centered">
                <button class="sgds-button is-rounded is-primary margin--top margin--bottom" @click="onHome">Back to Home</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';

@Component({})
export default class ErrorComponent extends Vue {
    message = 'super long error message';
    title = 'error title';

    mounted() {
        if (!this.$route.query.message || this.$route.query.title) {
            this.$router.push('home');
        } else {
            this.message = this.$route.query.message.toString();
            this.title = this.$route.query.title.toString();
        }
    }

    onHome() {
        this.$router.push('home');
    }
}
</script>