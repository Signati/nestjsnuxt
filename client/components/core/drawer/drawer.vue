<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div>
		<v-navigation-drawer
				:expand-on-hover="menufull"
				clipped
				v-model="open.drawer"
				app
				@input="drawerclose"
				fixed
				width="250"
		>
			<v-list nav dense>
                <span v-for="(item, i) in rutasuser" :key="i">
                <v-list-group
		                v-if="item.children.length > 0"
		                group
                >
                    <template v-slot:activator>
                        <v-list-item-icon class="m-0 mr-2">
                              <v-icon>{{ item.icon }}</v-icon>
                         </v-list-item-icon>
                        <v-list-item-title class="ml-0 pl-0">
                            {{ item.name }}
                        </v-list-item-title>
                    </template>
                    <span v-for="(childone, k) in item.children" :key="k">

                    <v-list-group
		                    v-if="childone.children.length > 0"
		                    sub-group
		                    class="ma-0 pa-0"
                    >
                        <template v-slot:activator style="background-color: #0d47a1">

                            <v-list-item-title class="ml-0 pl-0" style="position: relative;float: left;left: -15px;">
                                {{ childone.name }}
                            </v-list-item-title>
                        </template>
                        <FirstList v-for="(childtwo,index) in childone.children"
                                   :secondchild="true"
                                   :item="childtwo"
                                   :key="index"
                                   :to="childtwo.url"></FirstList>

                    </v-list-group>
                    <FirstList v-else
                               :secondchild="true"
                               :item="childone"
                    ></FirstList>
                    </span>

                </v-list-group>
                 <FirstList v-else :item="item"></FirstList>
                </span>
			</v-list>
		
		</v-navigation-drawer>
	</div>
</template>

<script lang="ts">
//import humbleLocalStorage from 'humble-localstorage';
import FirstList from './FirstList.vue';
//icons
//import { mdiMicrosoftXboxControllerMenu } from '@mdi/js';
//import { mdiApps } from '@mdi/js';
import { computed, defineComponent, reactive, ref, watch } from '@vue/composition-api';
import { routeApp } from '../../../utils/routes';


interface PropsDrawer {
  value: boolean
}

const Drawer = defineComponent<PropsDrawer>({
  components: {
    FirstList,
  },
  props: {
    value: {
      type: Boolean,
      required: false, // Accepts null and undefined as well
    },
  },
  setup(props: PropsDrawer, { emit }) {

    const menufull = ref(false);
    const open = reactive({
      drawer: true,
    });

    watch(() => props.value, (newVal, oldVAl) => {
      open.drawer = props.value;
    });

    const drawerclose = (state) => {
      emit('input', state);
    };

    return {
      menufull,
      rutasuser: routeApp,
      open,
      drawerclose,
    };
  },
});
export default Drawer;
</script>
