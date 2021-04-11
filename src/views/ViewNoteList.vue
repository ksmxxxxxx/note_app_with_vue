<template>
  <div class="note-list">
    <NoteList/>
  </div>
  <div>
    <router-link to="/add">Add Note</router-link>
  </div>
</template>

<script>
import NoteList from '@/components/NoteList.vue'
export default {
  components: {
    NoteList
  },
  name: 'ViewNoteList'
}
</script>
