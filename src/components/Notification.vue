<template>
  <div v-if="open" class="alert" :class="type === 'error' ? 'alert-danger' : 'alert-success'">
    <span class="closebtn" @click="closeNotification">&times;</span>
    <strong>{{ "type === 'error" ? 'Danger!' : 'Success!' }}</strong>
    {{message}}
  </div>
</template>

<script>
export default {
  props : ['open', 'message', 'type'],
  created() {
    setTimeout(() => {
      this.$emit('closeNotification')
    }, 5000)
  },
  methods : {
    closeNotification(){
      this.$emit('closeNotification')
    }
  }
}
</script>

<style scoped>
.alert {
  padding: 5px;
  color: white;
}

.alert-danger {
  background-color: var(--vt-c-danger);
}

.alert-success {
  background-color: var(--vt-c-success);
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>