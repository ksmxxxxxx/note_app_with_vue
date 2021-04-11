<template>
  <section v-show="!this.notes[this.$props.id].edit">
    <h1>{{ this.fetchData().title }}</h1>
    <p>{{ this.fetchData().body }}</p>
  </section>
  <section v-show="this.notes[this.$props.id].edit">
    <input type="text" v-model="this.notes[this.$props.id].title">
    <textarea v-model="this.notes[this.$props.id].body"></textarea>
  </section>
  <div><button @click="this.emitNote()">Save</button></div>
  <div>
    <button @click="this.enableEditNote()">Edit</button>
    <button @click="this.deleteNote()">Delete</button>
  </div>
</template>

<script>
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
    enableEditNote () {
      this.notes[this.$props.id].edit = true
    },
    emitNote () {
      this.saveNote()
      this.$router.push({ path: '/' })
    },
    saveNote () {
      const parsed = JSON.stringify(this.notes)
      localStorage.setItem('notes', parsed)
    }
  },
  name: 'NoteDetail',
  props: {
    id: Number,
    title: String,
    body: String
  }
}
</script>
