<template>
  <div>
    <div class="flex">
      <label for="title" class="flex-none w-14">Title</label>
      <input id="title" type="text" v-model="title" class="flex-grow">
    </div>
    <div class="flex mt-4">
      <label for="body" class="flex-none w-14">Body</label>
      <textarea id="body" v-model="body" class="flex-grow"></textarea>
    </div>
    <div class="flex justify-center mt-4">
      <button @click="cancelAdd" class="inline-flex px-6 py-3 rounded-full bg-gray-100">Cancel</button>
      <button @click="addNote" :disabled="disabled" class="disabled:opacity-80 inline-flex ml-4 px-6 py-3 rounded-full ring-4 ring-indigo-300 bg-indigo-700 text-white">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notes: [],
      newNote: {},
      title: null,
      body: null,
      edit: false,
      disabled: true
    }
  },
  watch: {
    title () {
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
      if (this.title) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    cancelAdd () {
      this.$router.push({ path: '/' })
    },
    addNote () {
      if (!this.title) {
        return
      }
      this.newNote.title = this.title
      this.newNote.body = this.body
      this.newNote.edit = this.edit
      this.notes.push(this.newNote)
      this.saveNote()
      this.newNote = ''
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
