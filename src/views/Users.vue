<template>
  <div>
    <h2 class="text-center">Users</h2>
  </div>
  <div style="width: 100%; display: flex; flex-wrap: wrap; color: #fff;">
    <div class="col" style="width: 25%; flex: 0 0 auto;" v-for="u in users" :key="u.id">
      <UserCard :user="u"></UserCard>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import UserCard from "../components/UserCard.vue"

export default {
  components : { UserCard },
  computed: {
    ...mapGetters(["users"]),
  },
  created() {
    this.getUsers();
  },
  methods : {
    getUsers(){
      this.$store.dispatch('fetchUsers')
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 320px) {
  .col {
    /*background-color: lightgreen;*/
    width: 100%!important;
    flex: 0 0 auto;
  }
}
</style>
