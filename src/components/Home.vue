<template>
    <div class="sgds-container padding--top--xl padding--bottom--xl is-fullwidth">
        <div class="row is-centered padding--top--sm">
            <div class="col is-2-desktop is-2-fullhd is-2-widescreen is-2-tablet is-4-touch is-4-mobile">
                <img src="../assets/tp-logo.svg"/>
            </div>
        </div>
        <div class="row is-centered padding--top--md">
            <div class="col is-8-desktop is-8-fullhd is-8-widescreen is-8-tablet is-8-touch is-12-mobile has-text-centered">
                <h1><b><span class="has-text-primary">Tech</span>Pass Test App</b></h1>
            </div>
        </div>
        <div class="row is-centered padding--top--md">
            <div class="col is-8-desktop is-8-fullhd is-8-widescreen is-8-tablet is-8-touch is-12-mobile has-text-centered">
                <p>
                    Inspect your OAuth2.0 and OpenID Connect tokens that TechPass returns.<br/> 
                    Click on the <b><span class="has-text-primary">Authenticate</span></b> button below to begin... 
                </p>
            </div>
        </div>
        <div class="row is-centered">
            <button class="sgds-button is-rounded is-primary" @click="onAuthenticate">Authenticate...</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Inject } from 'vue-property-decorator';
import VueSimpleAlert from "vue-simple-alert";
import { AuthService } from '../services/auth.service';
Vue.use(VueSimpleAlert);
@Component({
    name: 'Home'
})
export default class SideBar extends Vue { 
    onAuthenticate() {
       this.$alert("Hello Vue Simple Alert.");
       //AuthService.instance().login();
    }
}
</script>
