<template>
	<v-app>
		<v-main>
			<nuxt/>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Navigation from '../components/Navigation.vue';
import Menu from '../components/core/Menu/Menu.vue';

export default {
  components: {
    Menu,
    Navigation,
  },
};
</script>

<style lang="css" scoped></style>
