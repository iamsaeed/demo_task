<template>
     <div style="position: relative; margin: 30px; cursor: pointer" @click="openUserModal" @mouseover="userDetailsHandler" @mouseout="userDetailsHandler">
       <img :src="user.image" alt="Avatar" style="width:100%; height: auto; border-radius: 10px" >
       <div class="image-layer" style="border-radius: 10px" v-show="showUserDetails" >
         <div class="text-right" style="color: white;">
           <a href="mailto:info@info.com" style="color: white">
             <svg xmlns="http://www.w3.org/2000/svg" style="height: 30px; width: 30px; margin:5px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
             </svg>
           </a>
         </div>
       </div>
       <div class="text-layer mt-6 text-center" style="color: white;" v-show="showUserDetails">
         <p style="margin-bottom: -5px;: ">{{ user.name }}</p>
         <p>{{ user.address.city }}</p>
       </div>
     </div>
      <Modal
          :user="user"
          :open="open"
          @closeUserModal="closeUserModalHandler"
      />
</template>

<script>
import Modal from "./Modal.vue";
export default {
  props : ['user'],
  components : { Modal },
  data() {
    return {
      showUserDetails : false,
      open : false
    }
  },
  methods : {
    openUserModal(){
      this.open = true;
    },
    closeUserModalHandler(){
      this.open = false;
    },
    userDetailsHandler(){
      this.showUserDetails = !this.showUserDetails
    }
  }

}
</script>

<style scoped>

.image-layer {
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  opacity: .5;
  height: 99%;
  width: 100%;
}

.text-layer {
  position: absolute;
  top: 10%;
  left: 0;
  color: white;
  height: 99%;
  width: 100%;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {

}

</style>