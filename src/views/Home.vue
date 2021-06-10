<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <NoteList/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NoteList from '@/components/NoteList.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    NoteList
  }
}
</script>
