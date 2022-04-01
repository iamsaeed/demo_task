import usersData from "../../data/users.json";

const state = {
    users : []
};

const getters = {
    users(state){
        return state.users
    }
};

const mutations = {
    setUsers(state, payload){
        state.users = payload
    }
};

const actions = {
    fetchUsers(context){
        context.commit('setUsers', usersData);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
