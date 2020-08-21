<template>
	<v-app-bar app
	           :clipped-left="clipped"
	           height="54"
	           color="primary"
	           elevation="0"
	           style="border-bottom: 1px solid;border-bottom-color: hsla(0, 0%, 100%, .08)!important;"
	           dark>
		
		<v-app-bar-nav-icon @click.stop="drawerTouch">
			<v-icon>
				{{mdiMenu}}
			</v-icon>
		</v-app-bar-nav-icon>
		<v-toolbar-title>
			Genda {{email}}
		</v-toolbar-title>
		
		<v-spacer/>
		<session/>
	
	</v-app-bar>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from '@vue/composition-api';
import { mdiMenu } from '@mdi/js';
import session from '../session/session.vue';
import { accessor } from '../../../store';

interface PropsToolbar {
  value: boolean
}

const Toolbar = defineComponent<PropsToolbar>({
  components: {
    session,
  },
  props: {
    value: {
      type: Boolean,
      required: false, // Accepts null and undefined as well
    },
  },
  setup(props, { emit }) {
    const { value } = props;
    const clipped = ref<boolean>(true);
    const email = computed(() => {
      return accessor.email;
    });

    const open = computed(() => {
      return props.value;
    });
    const drawerTouch = () => {
      console.log('value ' + props.value);
      console.log('value emit' + !props.value);
      emit('input', !open.value);
    };
    return {
      drawerTouch,
      email,
      clipped,
      mdiMenu,
      open,
    };
  },
});
export default Toolbar;
</script>
