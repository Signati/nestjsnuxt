<template>
	<v-container fluid class="pa-0">
		<v-row row no-gutters>
			<v-col cols="12" :style="style">
				<v-row no-gutters>
					<v-col cols="12" sm="6" md="7" lg="8" class="hidden-xs-only">
						<v-row align="center"
						       justify="center"
						       style="height: 100vh; "
						>
							<v-carousel
									cycle
									height="400"
									hide-delimiter-background
									hide-delimiters
									show-arrows-on-hover
									:show-arrows="false"
							>
								<v-carousel-item
										v-for="(slide, i) in slides"
										:key="i"
								>
									<v-sheet
											:color="colors[i]"
											height="100%"
									>
										<v-row
												class="fill-height"
												align="center"
												justify="center"
										>
											<div class="display-3">{{ slide }} Slide</div>
										</v-row>
									</v-sheet>
								</v-carousel-item>
							</v-carousel>
							<!--<lottie :options="defaultOptions" style="float:left" :height="200" :width="300"/>-->
						</v-row>
					
					</v-col>
					<v-col cols="12" sm="6" md="5" lg="4">
						<v-card class="elevation-1 pa-3 ma-3 cardlogin"
						        style="height: 96vh; border-radius: 10px; background-color: rgba(255, 255, 255, 0.91);"
						>
							<v-card-text>
								<div class="layout column align-center pb-5">
									<v-img src="https://avatars1.githubusercontent.com/u/52678977?s=400&u=040aa07fa564985892d0fd115a2764579845502d&v=4"
									       lazy-src="https://avatars1.githubusercontent.com/u/52678977?s=400&u=040aa07fa564985892d0fd115a2764579845502d&v=4"
									       :aspect-ratio="1"
									       height="250"
									       width="250"
									       :isLoading="true"
									></v-img>
								</div>
								<span v-if="loading">
                                    <v-progress-linear
		                                    striped
		                                    height="3"
		                                    indeterminate
		                                    color="blue darken-2"
                                    ></v-progress-linear>
                                    </span>
								<br/>
								<v-form ref="form">
									<v-flex xs12 sm12 md12>
										<v-text-field
												v-model="authuser.email"
												style="border-color: red"
												outlined
												dense
												prepend-inner-icon="person"
												@keyup.enter="login"
												:rules="emailRules"
												name="Email"
												placeholder="Email"
												label="E-mail"
										></v-text-field>
									</v-flex>
									<v-flex xs12 sm12 md12>
										<v-text-field
												style="border-color: red"
												outlined
												dense
												prepend-inner-icon="lock"
												@keyup.enter="login"
												:rules="passwordRules"
												v-model="authuser.password"
												name="Password"
												placeholder="Password"
												label="Password"
												type="password">
										</v-text-field>
									</v-flex>
								</v-form>
							</v-card-text>
							<v-card-actions>
								<v-btn color="primary"
								       @click="login"
								       large
								       dark
								       block
								       :loading="loading"
								>
									Login
								</v-btn>
							
							
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
	<!--<v-flex xs12 sm6 md4 lg4>

	</v-flex>-->
</template>
<!--suppress TypeScriptUnresolvedVariable -->
<script lang="ts">
import { computed, defineComponent, onServerPrefetch, reactive, ref, Ref } from '@vue/composition-api';
import { Context } from '@nuxt/types';

const Login = defineComponent({
  layout: 'empty',
  components: {},
  props: {},
  head: {
    title: 'Login',
  },
  asyncData(ctx: Context): Promise<object | void> | object | void {
    //console.log(ctx.req.csrfToken());
    //console.log(ctx.req.data);
    console.log(ctx.store.state);

  },
  setup(props, { root }) {
    const style = {
      //backgroundImage: 'url(https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000)',
      background: '#602167',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };

    const colors = [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ];
    const slides = [
      'First',
      'Second',
      'Third',
      'Fourth',
      'Fifth',
    ];

    const authuser = reactive({
      email: '',
      password: '',
    });

    const emailRules = ref([
      (v: any) => !!v || 'E-mail es requerido',
      (v: any) => /.+@.+/.test(v) || 'E-mail debe ser valido',
    ]);
    const passwordRules = ref([
      (v: any) => !!v || 'Password es requerido',
    ]);

    const loading = ref(false);

    const login = async () => {

    };
    return {
      style,
      login,
      loading,
      colors,
      slides,
      emailRules,
      passwordRules,
      authuser,
    };
  },
});
export default Login;
</script>

<style scoped>

</style>
