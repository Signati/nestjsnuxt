<template>
	<div>
		<v-card
				class="mx-auto"
				color="#26c6da"
				dark
				max-width="400"
		>
			<v-card-title>
				<v-icon
						large
						left
				>
					mdi-twitter
				</v-icon>
				<span class="title font-weight-light">Twitter</span>
			</v-card-title>
			
			<v-card-text class="headline font-weight-bold">
				"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
			</v-card-text>
			
			<v-card-actions>
				<v-list-item class="grow">
					<v-list-item-avatar color="grey darken-3">
						<v-img
								class="elevation-6"
								src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
						></v-img>
					</v-list-item-avatar>
					
					<v-list-item-content>
						<v-list-item-title>Evan You</v-list-item-title>
					</v-list-item-content>
					
					<v-row
							align="center"
							justify="end"
					>
						<v-icon class="mr-1">mdi-heart</v-icon>
						<span class="subheading mr-2">256</span>
						<span class="mr-1">·</span>
						<v-icon class="mr-1">mdi-share-variant</v-icon>
						<span class="subheading">45</span>
					</v-row>
				</v-list-item>
			</v-card-actions>
		</v-card>
	
	</div>
</template>
<script lang="ts">
import { onMounted, ref, reactive, computed } from '@vue/composition-api';
import Hoc from '../components/Hoc.vue';
import { accesso } from '../store';

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
