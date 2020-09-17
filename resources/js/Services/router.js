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
                },
                {
                    path: '/work/:id',
                    component: ()=>import('../App/pages/video')
                },
                {
                  path: 'contact',
                  component: ()=>import('../App/pages/contact')
                },
                {
                    path: 'about',
                    component: ()=>import('../App/pages/about')
                }
            ]
        },
        {
            path: '/admin',
            component: ()=>import('../App/pages/cms')
        },
        {
            path: '/login',
            component: ()=>import('../App/pages/login')
        }
    ]
})

export default router;
