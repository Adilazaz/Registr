<template>
	<div>

		<!-- Default Layout -->
		<a-layout class="layout-default" id="layout-default">

			<!-- Page Content -->
			<a-layout-content>
				<router-view />
			</a-layout-content>
			<!-- / Page Content -->


		</a-layout>
		<!-- / Default Layout -->

	</div>
</template>

<script setup>



</script>

<style scoped>

.layout-default {
    background-color: white;
}

</style>