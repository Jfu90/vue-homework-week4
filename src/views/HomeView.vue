<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-yellow">
    <div class="conatiner loginPage vhContainer">
      <div class="side">
        <RouterLink to="/"
          ><img
            class="logoImg"
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
            alt=""
        /></RouterLink>
        <img
          class="d-m-n"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
          alt="workImg"
        />
      </div>
      <div>
        <RouterView v-slot="{ Component }">
          <transition name="slide-fade">
            <component :is="Component" />
          </transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.8s ease;
}

.slide-fade-leave-from {
  display: none;
}
.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
</style>
