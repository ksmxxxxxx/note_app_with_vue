<template>
  <section v-show="!this.edit">
    <div class="w-2/3 min-w-min mx-auto">
      <div>
        <h1 class="p-2 border-b border-solid border-gray-300 text-lg">{{ title }}</h1>
        <p class="p-2">{{ body }}</p>
      </div>
      <div class="flex justify-center mt-4">
        <button @click="this.$router.push({ path: '/' })" class="inline-flex px-6 py-3 rounded-full bg-gray-100">Back to list</button>
        <button @click="this.enableEditNote()" class="inline-flex ml-4 px-6 py-3 rounded-full bg-indigo-700 text-white">Edit</button>
        <button @click="this.deleteNote()" class="inline-flex ml-4 px-6 py-3 rounded-full bg-red-200 text-red-800">Delete</button>
      </div>
    </div>
  </section>
  <section v-show="this.edit">
    <div class="w-2/3 min-w-min mx-auto">
      <div class="flex flex-col">
        <input type="text" v-model="title" class="mb-2">
        <textarea v-model="body"></textarea>
      </div>
      <div class="flex justify-center mt-4">
        <button @click="this.cancelEditNote" class="inline-flex px-6 py-3 rounded-full bg-gray-100">Cancel</button>
        <button @click="this.emitNote()" :disabled="disabled" class="disabled:opacity-80 inline-flex ml-4 px-6 py-3 rounded-full ring-4 ring-indigo-300 bg-indigo-700 text-white">Save</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      notes: [],
      title: null,
      body: null,
      edit: null,
      disabled: false
    }
  },
  beforeMount () {
    if (localStorage.getItem('notes')) {
      try {
        this.notes = JSON.parse(localStorage.getItem('notes'))
        this.title = this.notes[this.$props.id].title
        this.body = this.notes[this.$props.id].body
        this.edit = this.notes[this.$props.id].edit
      } catch (e) {
        localStorage.removeItem('notes')
      }
    }
  },
  watch: {
    title () {
      if (this.title) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    }
  },
  methods: {
    deleteNote () {
      this.splice(this.$props.id, 1)
      this.saveNote()
      this.$router.push({ path: '/' })
    },
    cancelEditNote () {
      this.edit = false
    },
    enableEditNote () {
      this.edit = true
    },
    emitNote () {
      this.edit = false
      this.notes[this.$props.id].title = this.title
      this.notes[this.$props.id].body = this.body
      this.notes[this.$props.id].edit = this.edit
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
    id: Number
  }
}
</script>
