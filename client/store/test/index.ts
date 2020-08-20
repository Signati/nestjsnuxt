import { ref, onMounted, onUnmounted, defineComponent } from '@vue/composition-api';
import { useAccessor, getAccessorType } from 'typed-vuex';
import * as dynamicModule from './dynamic-module';
import { setup } from 'bs-logger';

const accessorType = getAccessorType(dynamicModule);

// export default function useTest() {
//   store.registerModule('dynamicModule', dynamicModule, {
//     preserveState: false,
//   });
//   const accessor = useAccessor(this.$store, dynamicModule, 'dynamicModule');
//
//   return {
//     accessor,
//   };
// }

