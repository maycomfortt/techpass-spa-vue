<template>
    <div id="logout">
        <div class="sgds-container">
            <h6 class="margin--top">You have signed out successfully.</h6>
            <button class="sgds-button is-small is-primary is-rounded margin--top margin--bottom" @click="onHome">Back to Home</button>
        </div>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { AuthService } from '../services/auth.service';

@Component({
    name: 'Logout'
})

export default class Logout extends Vue {
    state = '';

    mounted() { 
        AuthService.instance().logoutCB();
    }

    onHome() {
        this.$router.push('home');
    }
}
</script>
