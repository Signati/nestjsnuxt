<template>
	<div>
		<h1>amirmisael {{email}}</h1>
		<p>Ref: {{ aboutIt }}</p>
		<p>Reactive: {{ aboutItReactive.text }}</p>
		<button type="button" style="background-color: royalblue" @click="onClickBtn">{{ btnLabel }}</button>
		<Hoc v-slot="{ some, them }">
			<div>{{ some }}</div>
			<div>{{ them }}</div>
		</Hoc>
		<component :is="currentComponent" v-slot="{ some }">
			<div>{{ some }}</div>
		</component>
	</div>
</template>
<script lang="ts">
import { onMounted, ref, reactive, computed } from '@vue/composition-api';
import Hoc from '../components/Hoc.vue';
import { accessor, accessorType } from '../store';

export default {
  components: {
    Hoc,
  },

  setup(data, { root }) {

    const currentComponent = ref(Hoc);
    const email = computed(() => {
      return accessor.email;
    });
    onMounted(() => {
      console.log('mounted');
    });

    const aboutIt = ref(
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    );

    const aboutItReactive = reactive({
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    });

    const btnLabel = 'Click';

    const onClickBtn = () => {
      accessor.setEmail('dalia');
      aboutIt.value =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
      aboutItReactive.text =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    };

    const methods = {
      onClickBtn,
    };

    return {
      email,
      aboutIt,
      aboutItReactive,
      btnLabel,
      currentComponent,
      ...methods,
    };
  },
};
</script>

<style lang="css" scoped></style>
