import Vue from 'vue';
const Home = () => import('./pages/home')
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        { path: '/home', component: Home }
    ]

})