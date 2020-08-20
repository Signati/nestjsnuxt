import { mutationTree } from 'typed-vuex';

export const namespaced = true;

export const state = () => ({
  emails: [] as string[],
});

export const mutations = mutationTree(state, {
  addEmail(state, newEmail: string) {
    state.emails.push(newEmail);
  },
});
