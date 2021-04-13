<template>
  <NoteHeader/>
  <div class="note-list">
    <NoteList/>
  </div>
  <div>
    <router-link to="/add">Add Note</router-link>
  </div>
</template>

<script>
import NoteHeader from '@/components/NoteHeader.vue'
import NoteList from '@/components/NoteList.vue'
export default {
  components: {
    NoteHeader,
    NoteList
  },
  name: 'ViewNoteList'
}
</script>
