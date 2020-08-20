<template>
	<v-menu bottom left
	        class="elevation-0 rounded-50"
	        rounded="lg">
		<template v-slot:activator="{ on, attrs }">
			<v-btn
					dark
					icon
					v-bind="attrs"
					v-on="on"
			>
				<v-avatar size="40">
					<v-img src="https://i.stack.imgur.com/34AD2.jpg"></v-img>
				</v-avatar>
			</v-btn>
		</template>
		
		<v-list dense>
			<template v-for="(item, i) in items">
				
				<v-list-item :key="i" @click="">
					<v-list-item-icon class="mr-2 ml-0">
						<v-icon v-text="item.icon" :color="item.color"></v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title v-text="item.text"></v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider
						v-if="i + 1 < items.length"
						:key="i"
				></v-divider>
			</template>
		</v-list>
	</v-menu>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@vue/composition-api';
import { mdiAccountCog, mdiCogs, mdiHelpCircle, mdiPowerSettings } from '@mdi/js';

interface ActionsSession {
  text: string;
  icon: string;
  color?: string;
  action: string;
}

const session = defineComponent({
  components: {},
  props: {},
  setup() {
    const items: ActionsSession[] = [
      {
        icon: mdiAccountCog,
        action: 'profile',
        color: 'blue',
        text: 'Mi Perfil',
      },
      {
        icon: mdiCogs,
        action: 'profile',
        color: 'gray',
        text: 'Configuracion',
      },
      {
        icon: mdiHelpCircle,
        action: 'profile',
        color: 'accent',
        text: 'Ayuda',
      },
      {
        icon: mdiPowerSettings,
        action: 'profile',
        color: 'red',
        text: 'Salir',
      },
    ];
    return {
      items,
    };
  },
});
export default session;
</script>

<style scoped>

</style>
