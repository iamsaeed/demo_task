<template>
  <div @click="clickOutSide" v-if="open">
    <h2>Modal Example</h2>
    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content" @click.stop="">
        <span class="close" @click.stop="closeModal">&times;</span>
        <div class="text-center">
          <p style="color: black" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" style="height: 30px; width: 30px; margin-right:5px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>
              {{ user.name }}
            </span>
          </p>

          <p style="color: black" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" style="height: 30px; width: 30px; margin-right:5px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>
              <a :href="`mailto:${user.email}?subject=subject&body=Hello, ${user.name}. We’d like to propose you an offer.`">
              {{ user.email }}
              </a>
            </span>
          </p>

          <p style="color: black" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" style="height: 30px; width: 30px; margin-right:5px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>
              {{ user.phone }}
            </span>
          </p>

          <p style="color: black" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" style="height: 30px; width: 30px; margin-right:5px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>
              {{ user.address.city }} {{ user.address.street }}
            </span>
          </p>

          <p style="color: black" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" style="height: 30px; width: 30px; margin-right:5px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>
              {{ user.website }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props : ['user', 'open'],
  methods : {
    clickOutSide(event){
      this.$emit('closeUserModal')
    },
    closeModal(){
      this.$emit('closeUserModal')
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  min-height: 45%;
  width: 30%;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>