<template>
    <div id="app">
        <Masthead />

        <router-view />

        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Masthead from '@/components/Masthead.vue';
import Footer from '@/components/Footer.vue';

@Component({
    name: 'App',
    components: { Masthead, Footer }
})
export default class App extends Vue { }
</script>
