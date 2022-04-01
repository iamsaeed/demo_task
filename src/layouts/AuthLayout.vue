<template>
  <div class="flex items-center justify-center bg-light" style="min-height: 100vh;">
    <div class="card">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg-light {
  background-color: var(--vt-c-text-dark-2);
}
</style>