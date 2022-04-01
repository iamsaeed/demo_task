<template>
  <div class="sidebar">
    <router-link :to="{name:'users'}" >Users</router-link>
    <router-link :to="{name:'sign.in'}" >Sign In</router-link>
    <a @click="logout" href="#">Sign Out</a>
  </div>

  <div class="content">
    <router-view />
  </div>
</template>

<script>
export default {
  methods : {
    logout(){
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>