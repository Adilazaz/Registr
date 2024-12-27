import { createRouter, createWebHistory } from "vue-router";
import { watch } from 'vue';

import Home from '@/pages/Reference/Home.vue';
import Auth from '@/pages/newAuth.vue';
import Profile from '@/pages/Profile.vue';
import AdminPage from '@/pages/Admin/AdminPage.vue';

// Получаем данные пользователя
let userInfo = JSON.parse(localStorage.getItem('userInfo'));

// Определяем маршруты
const routes = [
    {
        path: "/auth",
        name: "Авторизация",
        component: Auth
    },
];

// Если пользователь авторизован, добавляем маршруты
if (userInfo) {
    routes.push(
        {
            path: "/profile",
            name: "Профиль",
            meta: {
                layout: 'dashboard',
            },
            component: Profile
        }
    );

    if (userInfo.roles === "ADMIN") {
        routes.push({
            path: "/AdminPage",
            name: "Админ панель",
            meta: {
                layout: 'dashboard'
            },
            component: AdminPage
        });
    } else {
        routes.push(
            {
                path: "/",
                name: "Справки",
                meta: {
                    layout: 'dashboard',
                },
                component: Home
            },
        );
    }
}

// Создание маршрутизатора
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
});

// Защита маршрутов
router.beforeEach((to, from, next) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    // Если пользователь не авторизован и не на странице /auth
    if (!userInfo && to.path !== '/auth') {
        next('/auth');
    } else if (userInfo && to.path === '/auth') {
        next('/'); // Перенаправляем авторизованного пользователя на главную
    } else {
        next(); // Разрешаем переход
    }
});

// Наблюдение за изменениями localStorage
watch(
    () => JSON.parse(localStorage.getItem('userInfo')), // Отслеживаем userInfo
    (newValue, oldValue) => {
        if (newValue && !oldValue) {
            router.push('/'); // Перенаправляем на главную при появлении userInfo
        }
    }
);

export default router;
