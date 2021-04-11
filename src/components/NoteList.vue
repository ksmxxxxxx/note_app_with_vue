<template>
  <ul>
    <NoteListItem v-for="(note, index) in notes" :key="index" :index="index" :title="note.title"/>
  </ul>
</template>

<script>
import NoteListItem from '@/components/NoteListItem.vue'
export default {
  data () {
    return {
      notes: []
    }
  },
  mounted () {
    if (localStorage.getItem('notes')) {
      try {
        this.notes = JSON.parse(localStorage.getItem('notes'))
      } catch (e) {
        localStorage.removeItem('notes')
      }
    }
  },
  components: {
    NoteListItem
  },
  name: 'NoteList'
}
</script>
