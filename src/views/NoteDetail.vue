<template>
  <Detail :title="this.fetchData().title" :body="this.fetchData().body"/>
  <div>
    <button>Edit</button>
    <button @click="this.deleteNote()">Delete</button>
  </div>
</template>

<script>
import Detail from '@/components/Detail.vue'
export default {
  data () {
    return {
      notes: []
    }
  },
  beforeMount () {
    if (localStorage.getItem('notes')) {
      try {
        this.notes = JSON.parse(localStorage.getItem('notes'))
      } catch (e) {
        localStorage.removeItem('notes')
      }
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      const index = this.$props.id
      const note = {}
      note.title = this.notes[index].title
      note.body = this.notes[index].body
      return note
    },
    deleteNote () {
      this.notes.splice(this.$props.id, 1)
      this.saveNote()
      this.$router.push({ path: '/' })
    },
    saveNote () {
      const parsed = JSON.stringify(this.notes)
      localStorage.setItem('notes', parsed)
    }
  },
  props: ['id'],
  components: {
    Detail
  },
  name: 'NoteDetail'
}
</script>
