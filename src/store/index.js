import { createStore } from 'vuex'
import auth from "./modules/auth";
import users from "./modules/users";

// Create a new store instance.
export default createStore({
    state : {
    },
    getters : {

    },
    mutations : {

    },
    actions : {

    },
    modules: {
        auth, users
    }
})