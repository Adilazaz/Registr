<template>
    <!-- Main Sidebar -->
    <a-layout-sider collapsible class="sider-primary" breakpoint="lg" collapsed-width="0" width="275px"
        :collapsed="sidebarCollapsed" @collapse="$emit('toggleSidebar', !sidebarCollapsed)" :trigger="null"
        :class="['ant-layout-sider-' + sidebarColor, 'ant-layout-sider-' + sidebarTheme]" theme="light"
        :style="{ backgroundColor: 'transparent' }">
        <div class="brand"><span>МУКР</span></div>
        <hr>

        <!-- Sidebar Navigation Menu -->
        <a-menu theme="light" mode="inline">
            <a-menu-item v-for="(item, index) in filteredMenuItems" :key="index"
                :class="{ 'ant-menu-item-selected': route.path === item.path }">
                <router-link :to="item.path">
                    <component :is="item.icon" class="icon"></component>
                    <span class="label">{{ item.label }}</span>
                </router-link>
            </a-menu-item>
        </a-menu>
        <!-- / Sidebar Navigation Menu -->


    </a-layout-sider>
    <!-- / Main Sidebar -->
</template>

<script setup>
import { useRoute } from 'vue-router';
import { MenuUnfoldOutlined, DollarOutlined } from '@ant-design/icons-vue';
import { computed } from 'vue';


// Принимаем пропсы
const props = defineProps({
    // Sidebar collapsed status.
    sidebarCollapsed: {
        type: Boolean,
        default: false,
    },

    // Main sidebar color.
    sidebarColor: {
        type: String,
        default: "primary",
    },

    // Main sidebar theme : light, white, dark.
    sidebarTheme: {
        type: String,
        default: "light",
    },
});

const route = useRoute();

const menuItems = [
    { path: '/', label: 'Справки', icon: MenuUnfoldOutlined, roles: ["USER", "ADMIN"] },
    { path: '/adminPage', label: 'Админ Панель', icon: DollarOutlined, roles: ["ADMIN"] },
];

// Функция для фильтрации элементов меню по роли пользователя
let userInfo = JSON.parse(localStorage.getItem('userInfo'))
const filteredMenuItems = computed(() => {

    if (!userInfo || !userInfo.roles ) {
        return [];
    }

    return menuItems.filter(item => {
        return item.roles.includes(userInfo.roles);
    });
});

</script>

<style scoped>
.ant-menu-item {
    padding: 10px;
}
</style>