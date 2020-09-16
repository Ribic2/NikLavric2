import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: ()=>import('../App/Layout/index'),
            children: [
                {
                    path: '',
                    component: ()=>import('../App/pages/home')
                }
            ]
        }
    ]
})

export default router;
