<template>
	<div>
		<drawer v-model="state.drawer"></drawer>
		<toolbar v-model="state.drawer"></toolbar>
	</div>
</template>

<script lang="ts">
import toolbar from '../toolbars/toolbar.vue';
import drawer from '../drawer/drawer.vue';
import { defineComponent, reactive, ref } from '@vue/composition-api';

const Navigation = defineComponent({
  components: {
    toolbar,
    drawer,
  },
  setup() {
    const state = reactive({
      drawer: true,
    });
    return {
      state,
    };
  },
});
export default Navigation;
</script>

<style lang="css" scoped>
	.nav-item {
		display: inline-block;
		margin-right: 8px;
	}
</style>
