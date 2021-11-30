<template>
      <div class="relative opacity-0 rounded-2xl bg-gray-100 animate-open-window"
           :class="{
            'animate-stay': true, 
            'animate-open-window': !reverse,
            'animate-close-window': reverse
           }"
      >
            <div 
            @click="close"
            class="z-10 opacity-0 animate-stay absolute -top-2 -right-2 h-10 w-10 bg-gray-100 text-center text-sm grid place-items-center rotate-45 cursor-pointer rounded-lg align-middle transition duration-500 ease-in-out shadow hover:shadow-md hover:rounded-xl hover:bg-gray-300"
               :class="{
            'animate-show-close': !reverse,
            'animate-hide-close': reverse
           }"
            ><div class="transform -rotate-45">X</div></div>
          <div class="opacity-0 animate-stay"
               :class="{
            'animate-show': !reverse,
            'animate-hide': reverse
           }"
          >
          <slot/>
          </div>
      </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'Window',
  setup() {
      const reverse = ref(false);

      const close = () => {
          reverse.value = true;
          setTimeout(() => {
            reverse.value = false
          }, 2000)
      }

      return {
          reverse,
          close
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .animate-stay {
        animation-fill-mode: forwards;
    }
</style>
