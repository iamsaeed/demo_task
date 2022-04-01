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
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <span>
              <a :href="`mailto:${user.email}?subject=We are hiring!&body=Hello, ${user.name}. We’d like to propose you an offer.`">
              {{ user.email }}
              </a>
            </span>
          </p>

          <p style="color: black" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" style="height: 30px; width: 30px; margin-right:5px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>
              {{ user.phone }}
            </span>
          </p>

          <p style="color: black" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" style="height: 30px; width: 30px; margin-right:5px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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