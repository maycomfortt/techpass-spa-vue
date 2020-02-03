import Vue from 'vue'
import Router from 'vue-router'

import ErrorComponent from '@/components/Error.vue';
import Home from '@/components/Home.vue'
import Logout from '@/components/Logout.vue';
import Tokens from '@/components/Tokens.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    linkExactActiveClass: "is-active",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/tokens',
            name: 'tokens',
            component: Tokens,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout,
        },
        {
            path: '/error',
            name: 'error',
            component: ErrorComponent
        }
    ]
})
