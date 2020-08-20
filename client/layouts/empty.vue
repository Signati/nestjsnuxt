<template>
	<v-app>
		<v-main>
			<nuxt/>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Navigation from '../components/core/navigation/navigation.vue';
import Menu from '../components/core/drawer/drawer.vue';

export default {
  components: {
    Menu,
    Navigation,
  },
};
</script>

<style lang="css" scoped></style>
