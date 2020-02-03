<template>
    <div id="token">
        <div class="sgds-container is-fluid">
            <div class="row margin--top">
                <div class="col is-9 is-offset-1">
                    <p>Token Expires in <span class="has-text-primary">{{ time }}</span> sec.</p>
                </div>
                <div class="col is-2">
                    <button class="sgds-button is-primary is-small is-rounded is-uppercase" @click="onLogout"><b>Logout</b></button>
                </div>
            </div>
        </div>
        <hr class="margin--top margin--bottom" />
        <div class="sgds-container">
            <div class="sgds-card margin--top">
                <div class="sgds-card-header"><p class="sgds-card-header-title">Decoded Access Token</p></div>
                <div class="sgds-card-content"><pre>{{ access_token }}</pre></div>
            </div>
            <div class="sgds-card margin--top">
                <div class="sgds-card-header"><p class="sgds-card-header-title">Decoded ID Token</p></div>
                <div class="sgds-card-content"><pre>{{ id_token }}</pre></div>
            </div>
            <div class="sgds-card margin--top margin--bottom">
                <div class="sgds-card-header"><p class="sgds-card-header-title">Refresh Token</p></div>
                <div class="sgds-card-content"><pre>{{ refresh_token }}</pre></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import { User } from 'oidc-client';
import { decode } from 'jsonwebtoken';

import { AuthService } from '../services/auth.service';

@Component({
    name: 'Tokens'
})
export default class Tokens extends Vue { 
    access_token: string = '';
    id_token: string = '';
    refresh_token: string|undefined = '';
    time: number = 0;

    private _interval: number = 0;

    private onTimeInterval() {
        if(this.time > 0) {
            this.time -= 1;
        }
    }

    mounted() {
        AuthService.instance().loginCB(this.$route.fullPath).then(user => {
            if(!user) {
                this.access_token = "error";
                this.id_token = "error";
                this.refresh_token = "error";
            } else {
                this.access_token = JSON.stringify(decode(user.access_token), null, 2);
                this.id_token = JSON.stringify(decode(user.id_token), null, 2);
                this.refresh_token = user.refresh_token || "Not Returned";
                this.time = user.expires_in;
            }
        });
    }

    created() {
        this._interval = window.setInterval(this.onTimeInterval, 1000);
    }

    beforeDestory() {
        if(this._interval != 0) {
            window.clearInterval(this._interval);
        }
    }
    onLogout() {
        AuthService.instance().logout();
    }
}
</script>
