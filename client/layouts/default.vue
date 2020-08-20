<template>
	<v-app>
		<v-main>
			<Navigation/>
			<v-container>
				<nuxt/>
			</v-container>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Navigation from '../components/core/navigation/navigation.vue';
import { Context } from '@nuxt/types';
import { accessor } from '../store';
import { onMounted } from '@vue/composition-api';

export default {
  components: {
    Navigation,
  },
  asyncData(ctx: Context): Promise<object | void> | object | void {
    return ctx;
  },
  setup() {
    onMounted(() => {

      accessor.setEmail('pedro');
    });
  },
};
</script>

<style lang="css" scoped></style>
