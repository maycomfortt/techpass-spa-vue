<template>
    <footer class='sgds-footer'>
        <div class="top-section">
            <div class="sgds-container is-fluid">
                <div class="row">
                    <div class="col">
                        <h5 class="has-text-white"><b>TechPass Test App</b></h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col is-4">
                        <p class="has-text-white"><b>Related Information</b></p>
                        <p><a href="https://oauth.net/2/">OAuth 2.0 Protocol Standard</a></p>
                        <p><a href="https://openid.net/">OpenID Foundation</a></p>
                        <p><a href="https://jwt.io/">JSON Web Tokens</a></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col is-right-desktop-only">
                        <ul>
                            <li class="is-inline-block-desktop-only">
                                <p><a href="" target="_blank">Contact</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-section">
            <div class="sgds-container is-fluid">
                <div class="row is-multiline">
                    <div class="col is-12">
                        <ul>
                            <li>
                                <a href="https://tech.gov.sg/report_vulnerability" target="_blank">Report Vulnerability</a>
                            </li>
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Terms of Use</a></li>
                        </ul>
                    </div>
                    <div class="col is-12 has-text-right-desktop has-text-right-tablet has-text-left-mobile">
                        <p class="is-hidden-touch"> © 2020 Government of Singapore. Last Updated
                            24 Jan 2020</p>
                        <p class="is-hidden-desktop">© 2020 Government of Singapore</p>
                        <p class="is-hidden-desktop last-updated">Last Updated 24 Jan 2020</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    name: 'Footer'
})
export default class Footer extends Vue { }
</script>
