import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Import global css file
import './styles.scss';
import 'sgds-govtech-vue';
import { AuthService } from './services/auth.service';

Vue.config.productionTip = false;

new Vue({
    render: (h: any) => h(App),
    router
}).$mount('#app');

router.beforeEach((to, from, next) => {
    const requireAuth = to.matched.some(record => record.meta.requireAuth);

    if(requireAuth) {
        AuthService.instance().isAuthenticated().then(auth => {
            if(auth) {
                next();
            } else {
                AuthService.instance().login();
                // next({
                //     path: '/',
                //     query: {
                //         redirect: to.fullPath
                //     }
                // });
            }
        });
    } else {
        next();
    }
});