<template>
   <div>
      <nav :key="navKey" class="navbar navbar-expand-lg navbar-dark fixed-top navbar-animation">
         <div class="container justify-content-center">
              <ul class="navbar-nav">
                 <li class="nav-item">
                    <router-link to="/" class="nav-link nav-effect">Home</router-link>
                 </li>
                 <li class="nav-item">
                    <router-link to="/experiences" class="nav-link nav-effect">Experiences</router-link>
                 </li>
                 <li class="nav-item">
                    <router-link to="/projects" class="nav-link nav-effect">Projects</router-link>
                 </li>
                 <li class="nav-item">
                    <router-link to="/contact" class="nav-link nav-effect">Contact me</router-link>
                 </li>
              </ul>
         </div>
      </nav>

      <div class="page-content container">
         <RouterView v-slot="{ Component, route }">
             <Transition name="page" appear>
                <div :key="route.fullPath" class="page-wrapper">
                  <component :is="Component" />
                </div>
             </Transition>
         </RouterView>
      </div>
   </div>
</template>

<script setup>
   import { ref, watch } from 'vue'
   import { useRoute } from 'vue-router'

   const route = useRoute()
   const navKey = ref(0)

   watch(
      () => route.fullPath,
      () => {
         navKey.value++
      }
   )
</script>

<style>
   .page-content {
      padding-top: 80px; 
      min-height: 150vh;
   }

   .page-wrapper {
      width: 100%;
   }

   /* Navbar transition */
   @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
   }

   .navbar-animation {
      animation: slideDown 0.8s ease-out both;
   }

   /* Navbar text */
   .nav-effect {
      color: #003366 !important;
      font-size: 18px;
      font-weight: 500;
      transition: border color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
      font-family: Arial, Helvetica, sans-serif;
      text-decoration: none;
      border: 2px solid transparent;
      border-radius: 8px;
      padding: 8px 14px;
   }

   /* Hover effect */
   .nav-effect:hover {
      color: #003366 !important;
      background-color: #ffffff;
      border-color: #003366;
   }

   /* Highlight the current page */
   .nav-effect.router-link-active {
      color: #003366 !important;
      border-color: #003366;
      font-weight: 700;
   }

   /* Page transition */
   .page-enter-active,
   .page-appear-active {
      transition: opacity 0.7s ease, transform 0.7s ease;
   }

   .page-enter-from,
   .page-appear-from {
      opacity: 0;
      transform: translateY(60px);
   }

   .page-leave-active {
      transition: none;
   }
</style>

