<template>
  <div>
    <h4 class="text-center uppercase">Sign In To Your Account</h4>
    <form @submit.prevent="login">
      <div class="flex flex-col mt-2">
        <input class="form-control" type="text" v-model="username" required placeholder="Username">
        <input class="form-control" type="password" v-model="password" required placeholder="Password">
      </div>

      <Notification :open="open" :type="type" :message="message" @closeNotification="closeNotification" />

      <div class="mt-2">
        <button type="submit" class="btn btn-primary uppercase">sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
import Notification from "../components/Notification.vue";
export default {
  components : { Notification },
  data(){
    return {
      username : '',
      password: '',
      type: '',
      message : '',
      open : false
    }
  },
  methods : {
    closeNotification(){
      this.open = false;
      this.type = '';
      this.message = ''
    },
    login(){
      if(this.username === 'admin' && this.password === '1234') {

        this.$store.dispatch('login')
        this.type = 'success';
        this.message = 'Login success!'
        this.open = true;

      } else {

        this.message = 'Incorrect username or password!'
        this.type = 'error';
        this.open = true;

      }
    }
  }
}
</script>

<style>
</style>