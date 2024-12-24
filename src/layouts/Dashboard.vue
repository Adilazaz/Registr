<script setup>
import { ref, computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import DashboardSidebar from '@/components/SideBar.vue';
import DashboardHeader from '@/components/Header.vue' ;


// Переменные состояния
const sidebarCollapsed = ref(false);
const sidebarColor = ref("success");
const sidebarTheme = ref("light");
const navbarFixed = ref(true);
const showSettingsDrawer = ref(false)

// Методы
const toggleSidebar = (value) => {
    sidebarCollapsed.value = value;
};

const updateSidebarTheme = (value) => {
    sidebarTheme.value = value;
};

const updateSidebarColor = (value) => {
    sidebarColor.value = value;
};

const toggleSettingsDrawer = (value) => {
    showSettingsDrawer.value = value
}

// Маршрут
const route = useRoute();

// Вычисляемые свойства
const layoutClass = computed(() => {
    return route.meta.layoutClass;
});

</script>

<template>
    <div>
       <!-- Dashboard Layout -->
		<a-layout class="layout-dashboard" id="layout-dashboard" :class="[navbarFixed ? 'navbar-fixed' : '', ! sidebarCollapsed ? 'has-sidebar' : '', layoutClass]">
			
			<!-- Main Sidebar -->
			<DashboardSidebar
				:sidebarCollapsed="sidebarCollapsed"
				:sidebarColor="sidebarColor"
				:sidebarTheme="sidebarTheme"
				@toggleSidebar="toggleSidebar"
			></DashboardSidebar>
			<!-- / Main Sidebar -->

			<!-- Layout Content -->
			<a-layout>
                <!-- Layout Header's Conditionally Fixed Wrapper -->
				<DashboardHeader
					:sidebarCollapsed="sidebarCollapsed"
					:navbarFixed="navbarFixed"
					@toggleSettingsDrawer="toggleSettingsDrawer"
					@toggleSidebar="toggleSidebar"
				></DashboardHeader>
				<!-- / Layout Header's Conditionally Fixed Wrapper -->
				<!-- Page Content -->
				<a-layout-content>
					<router-view />
				</a-layout-content>
				<!-- / Page Content -->
			</a-layout>
			<!-- / Layout Content -->
			

		</a-layout>
		<!-- / Dashboard Layout -->
    </div>
</template>
  
  
<style scoped>
/* Стили для вашего компонента */
</style>
  