import router from "../../router";

const state = {
    isLoggedIn: !!window.sessionStorage.getItem("login")
};

const getters = {
    isLoggedIn(state){
        return state.isLoggedIn
    }
};

const mutations = {
    setLoginState(state, payload){
        state.isLoggedIn = payload
        window.sessionStorage.setItem("login", payload);

    },
    setLogoutState(state, payload){
        state.isLoggedIn = payload
        window.sessionStorage.clear();
    }
};

const actions = {
    login(context){
        context.commit('setLoginState', true)
        router.push({name: 'users'})
    },
    logout(context){
        context.commit('setLogoutState', false)
        router.push('/')
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
