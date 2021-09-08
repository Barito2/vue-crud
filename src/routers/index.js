import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home.index',
        component: () => import("../components/Crud.vue")
    },
    {
        path: '/create',
        name: 'home.create',
        component: () => import("../components/Create.vue")
    },
    {
        path: '/edit/:id',
        name: 'home.edit',
        component: () => import("../components/Edit.vue")
    },
    {
        path: '/login',
        name: 'home.login',
        component: () => import("../components/Login.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router