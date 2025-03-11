import { createWebHistory, createRouter } from "vue-router";
import ContactBook from '@/views/ContactBook.vue';

const routes = [
    {
        path: '/',
        name: 'contactbook',
        component: ContactBook
    },
    {
        path: '/:pathMath(.*)*',
        name: 'notFound',
        component: () => import('@/views/NotFound.vue')
    },
    {
        path: '/contact/:id',
        name: 'contact.edit',
        component: () => import('@/views/ContactEdit.vue'),
        props: true
    },
    {
        path: '/contact/add',
        name: 'contact.add',
        component: () => import('@/views/ContactAdd.vue')
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;