<template>
	<v-list-item active-class="accent" :to="routepath.url" :class=" second ? 'ml-3':''">
		<v-list-item-icon class="m-0 mr-2">
			<v-icon>{{routepath.icon}}</v-icon>
		</v-list-item-icon>
		<v-list-item-title>{{routepath.name}}</v-list-item-title>
	</v-list-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { RoutePath } from '../../../types/RoutePath.type';

const FirstList = defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
    secondchild: {
      required: false,
    },
  },
  setup(props, {}) {
    const { item: routepath, secondchild: second } = props;
    return {
      routepath,
      second,
    };
  },
});
export default FirstList;

</script>

<style scoped>

</style>
