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
    <button @click="cancelAdd">Cancel</button>
    <button @click="addNote" :disabled="disabled">Save</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notes: [],
      newNote: {
        title: null,
        body: null,
        edit: false
      },
      disabled: true
    }
  },
  watch: {
    'newNote.title': function () {
      this.activateSave()
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
    activateSave () {
      if (this.newNote.title) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    cancelAdd () {
      this.$router.push({ path: '/' })
    },
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
  name: 'NoteAddForm'
}
</script>
