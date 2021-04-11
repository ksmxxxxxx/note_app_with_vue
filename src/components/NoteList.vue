<template>
  <ul>
    <ListItem v-for="(note, index) in notes" :key="index" :index="index" :title="note.title"/>
  </ul>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
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
    ListItem
  },
  name: 'List'
}
</script>
