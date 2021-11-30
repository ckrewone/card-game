<template>
<div class="bg-gradient-to-r from-green-500 to-blue-500 h-screen w-screen animate-gradient-xy p-5 flex justify-center items-center">

  <div class="grid grid-cols-3 gap-4 h-1/2" >
  <div class="l-0 mx-8 m-h w-full h-full flex items-center">
     <window class="grid place-items-center">
       <div class="font-thin text-center mx-8 my-12 text-2xl">
       Hello Nacix!
       </div>
    </window>
  </div>
    <div class="mx-8 m-h w-full h-full flex items-center">
     <window class="grid place-items-center">
       <div class="font-thin text-center mx-8 my-12 text-2xl">
       Hello Nacix!
       </div>
    </window>
  </div>
    <div class="mx-8 m-h w-full h-full flex items-center">
     <window class="grid place-items-center">
       <div class="font-thin text-center mx-8 my-12 text-2xl">
       Hello Nacix!
       </div>
    </window>
  </div>
</div>
</div>
</template>

<script>
import Window from './components/Window.vue'

export default {
  name: 'App',
  components: {
    Window
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
