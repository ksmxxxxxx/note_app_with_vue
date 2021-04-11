<template>
  <div class="note-list">
    <List/>
  </div>
  <div>
    <router-link to="/add">Add Note</router-link>
  </div>
</template>

<script>
import List from '@/components/List.vue'
export default {
  components: {
    List
  },
  name: 'NoteList'
}
</script>
