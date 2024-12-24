import { createStore } from "vuex";
import { auth } from "./auth.module";
import { reference } from "./reference.module";

const store = createStore({
  modules: {
    auth,
    reference
  },
});

export default store;