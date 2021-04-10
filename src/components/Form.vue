<template>
  <div>
    <div>
      <label for="title">Title</label>
      <input id="title" type="text" v-model="newNote.title">
    </div>
    <div>
      <label for="body">Body</label>
      <textarea id="body" v-model="newNote.body"></textarea>
    </div>
    <button @click="addNote">Save</button>
    <p>{{ newNote.title }}</p>
    <p>{{ newNote.body }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notes: [],
      newNote: {
        title: null,
        body: null
      }
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
  methods: {
    addNote () {
      if (!this.newNote) {
        return
      }
      this.notes.push(this.newNote)
      this.newNote = ''
      this.saveNote()
      this.$router.push({ path: '/' })
    },
    saveNote () {
      const parsed = JSON.stringify(this.notes)
      localStorage.setItem('notes', parsed)
    }
  },
  name: 'Form'
}
</script>
