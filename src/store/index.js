import { createStore } from "vuex";
import { fileModule } from "./fileModule";
import { menuModule } from "./menuModule";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    foldersData: fileModule,
    menuData: menuModule,
  },
});
