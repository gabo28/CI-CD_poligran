<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="title"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    const title = ref('hola')
    const newTitle = () => {
      title.value = 'hello word'
    }
    newTitle()
    return { title, newTitle }
  }
}
</script>
