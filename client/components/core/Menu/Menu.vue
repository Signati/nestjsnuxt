<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div>
		
		<v-navigation-drawer
				:expand-on-hover="menufull"
				clipped
				v-model="drawer"
				app
				fixed
				width="250"
		>
			<v-list nav dense>
                <span v-for="(item, i) in rutasuser" :key="i">
                <v-list-group v-if="item.children.length > 0"
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
                                   :to="childtwo.url ? '': ''"></FirstList>

                    </v-list-group>
                    <FirstList v-else
                               :secondchild="true"
                               :item="childone"
                    ></FirstList>
                    </span>

                </v-list-group>
                 <FirstList v-else :item="item" :secondchild="false"></FirstList>
                </span>
			</v-list>
		
		</v-navigation-drawer>
		<v-app-bar app
		           :clipped-left="clipped"
		           height="54"
		           color="primary"
		           dark>
			
			<v-app-bar-nav-icon @click.stop="drawer = !drawer">
				<v-icon>
					{{mdiMenu}}
				</v-icon>
			</v-app-bar-nav-icon>
			<v-toolbar-title>
				Genda
			</v-toolbar-title>
			
			<v-spacer></v-spacer>
			
			<v-btn class="ml-4" icon>
				<v-avatar size="40">
					<v-img src="https://i.stack.imgur.com/34AD2.jpg"></v-img>
				</v-avatar>
			
			</v-btn>
		
		
		</v-app-bar>
	
	</div>
</template>

<script lang="ts">
//import humbleLocalStorage from 'humble-localstorage';
import FirstList from './FirstList.vue';
//icons
//import { mdiMicrosoftXboxControllerMenu } from '@mdi/js';
//import { mdiApps } from '@mdi/js';
import { defineComponent, onMounted, reactive, ref } from '@vue/composition-api';
import { routeApp } from '../../../utils/routes';
import { mdiMenu } from '@mdi/js';

const Menu = defineComponent({
  components: {
    FirstList,
  },
  setup() {
    const menufull = ref<boolean>(false);
    const drawer = ref<boolean>(true);
    const clipped = ref<boolean>(true);

    return {
      menufull,
      drawer,
      mdiMenu,
      clipped,
      rutasuser: routeApp,
    };
  },
});
export default Menu;
// mdiMicrosoftXboxControllerMenu: string = mdiMicrosoftXboxControllerMenu;
// mdiApps: string = mdiApps;
// public loginCardBackground = loginCardBackground;
// public mini: boolean = true;
// public miniVariant: boolean = true;
// public menufull: boolean = false;
// public right: boolean = true;
// public rightDrawer: boolean = false;
// public clipped: boolean = true;
// public drawer: boolean = true;
// public drawer2: boolean = true;
// public fixed: boolean = true;
// public rutasuser: any = [];
// public snackbar: boolean = false;
// public timenotification: number = 6000;
// public notificationtext: string = '';
// public notificationcolor: string = '';
// public title: string = this.$AppTitle.title;
// public fav: boolean = true;
// public menumessage: boolean = false;
// public message: boolean = false;
// public hints: boolean = true;
// public usuario = AuthModule.userCurrent;
// public ciclos: CycleSchool[] = CyclesModule.ciclos;
// public cicloAc: any = CyclesModule.cicloCurrent;
// public currentSucursal: BranchOffice = { ...BranchOfficeStore.currentBranchOffice };
// public cycleName: string = CyclesModule.cicloName;
// company = {
//   id: 0,
//   uuid: '',
//   name: 'Loading ...',
//   businessName: '',
//   rfc: '',
//   address: '',
//   defaultClient: undefined,
//   logo: '',
//   createdDate: '',
//   updatedDate: '',
//   version: 0,
// };
//
// get menu() {
//
//   this.menufull = humbleLocalStorage.getItem('menufull') === 'true' ? true : false;
//   if (this.menufull) {
//     this.miniVariant = false;
//   } else {
//     this.miniVariant = true;
//   }
//   return 0;
// }
//
// get routes() {
//   return RoutesModule.routes;
// }
//
// get sucursales() {
//   return BranchOfficeStore.getBranchOffices;
// }
//
// get themeapp() {
//   return ThemeAppStore.dark;
// }
//
// public async mounted() {
//   await this.sessionmount();
//   const companyID = AuthModule.company.uuid || undefined;
//   if (companyID) {
//     this.fetchCompany(companyID);
//   }
// }
//
// async fetchCompany(companyID: string | null) {
//   const settingsService = new SettingsService();
//   if (companyID) {
//     this.company = await settingsService.fetchCompanyByUuid(companyID);
//   }
// }
//
// public load_ciclo_data(cycle: CycleSchool) {
//   CyclesModule.setCurrentCycle(cycle);
//   CyclesModule.changeCiclo(cycle.id);
//   CyclesModule.setName(cycle.name);
//   this.cycleName = CyclesModule.cicloName;
//   this.rightDrawer = false;
// }
//
// public changeOffice(office: BranchOffice) {
//   BranchOfficeStore.setCurrBranchOffice(office);
//   this.loadBranchOfficeSetting(office.branchoffice || []);
// }
//
// public async loadBranchOfficeSetting(branchOfficeSettings: BranchOfficeSetting[]) {
//   BranchOfficeSettingStore.resetBranchOfficeSetting();
//   for (const branchOffSet of branchOfficeSettings) {
//     console.log(branchOffSet);
//     if (branchOffSet.typeModule === TypeModule.tienda || branchOffSet.typeModule === '1') {
//       await BranchOfficeSettingStore.setCompanyTiendaStore(branchOffSet);
//     }
//     if (branchOffSet.typeModule === TypeModule.academia || branchOffSet.typeModule === '2') {
//       await BranchOfficeSettingStore.setCompanyAcademiasStore(branchOffSet);
//     }
//     if (branchOffSet.typeModule === TypeModule.colegio || branchOffSet.typeModule === '3') {
//       await BranchOfficeSettingStore.setCompanyColegioStore(branchOffSet);
//     }
//   }
//
// }
//
// hovermenu() {
//   if (this.menufull) {
//     this.miniVariant = false;
//   } else {
//     if (this.miniVariant) {
//       this.miniVariant = false;
//     }
//   }
// }
//
// hoveroutmenu() {
//   if (this.menufull) {
//     this.miniVariant = false;
//   } else {
//     if (!this.miniVariant) {
//       this.miniVariant = true;
//     }
//   }
// }
//
// sessionmount() {
//   this.rutasuser = this.routes;
// }
//
// logout() {
//   this.newnotification('Cerrando sesión', 'blue');
//
//   setTimeout(() => {
//     this.closesession();
//   }, 500);
//
// }
//
// closesession() {
//   AuthModule.logout();
//   this.$router.push('/login');
// }
//
// newnotification(msj: any, color: any) {
//
//   this.notificationtext = msj;
//   this.notificationcolor = color;
//   this.snackbar = true;
// }
//
// menufullsession() {
//
//   this.menufull = !this.menufull;
//   humbleLocalStorage.setItem('menufull', this.menufull);
//   // this.$session.set("menufull", this.menufull);
// }
//
// themdark() {
//   // @ts-ignore
//   this.$vuetify.theme.isDark = !this.themeapp;
//   ThemeAppStore.setDark();
// }

</script>
<style lang="sass">

</style>
