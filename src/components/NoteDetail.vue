<template>
  <section v-show="!this.notes[this.$props.id].edit">
    <div class="w-2/3 min-w-min mx-auto">
      <div>
        <h1 class="p-2 border-b border-solid border-gray-300 text-lg">{{ fetchData.title }}</h1>
        <p class="p-2">{{ fetchData.body }}</p>
      </div>
      <div class="flex justify-center mt-4">
        <button @click="this.$router.push({ path: '/' })" class="inline-flex px-6 py-3 rounded-full bg-gray-100">Back to list</button>
        <button @click="this.enableEditNote()" class="inline-flex ml-4 px-6 py-3 rounded-full bg-indigo-700 text-white">Edit</button>
        <button @click="this.deleteNote()" class="inline-flex ml-4 px-6 py-3 rounded-full bg-red-200 text-red-800">Delete</button>
      </div>
    </div>
  </section>
  <section v-show="this.notes[this.$props.id].edit">
    <div class="w-2/3 min-w-min mx-auto">
      <div class="flex flex-col">
        <input type="text" v-model="test">
        <p>{{ this.notes[this.$props.id].title }}</p>
        <input type="text" v-model="this.notes[this.$props.id].title" class="mb-2">
        <textarea v-model="fetchData.body"></textarea>
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
      test: 'テスト',
      disabled: false
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
  computed: {
    fetchData () {
      const index = this.$props.id
      const note = {}
      note.title = this.notes[index].title
      note.body = this.notes[index].body
      return note
    }
  },
  watch: {
    // test () { console.log(this.notes[this.$props.id].title) }
    // notes: {  ← これはwatchされている
    //   handler () {
    //     console.log(this.notes[this.$props.id].title)
    //   },
    //   deep: true
    // }
    // ↓ これだとwatchされない
    'notes[this.$props.id].title': function () {
      console.log(this.notes[this.$props.id].title)
    }
  },
  // ↓これもwatchされない
  // created () {
  //   console.log(this.notes.length)
  //   this.$watch('this.notes[this.$props.id].title', () => {
  //     console.log('hoge')
  //   },
  //   { deep: true })
  // },
  methods: {
    activateSave () {
      if (this.notes[this.$props.id].title) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    deleteNote () {
      this.notes.splice(this.$props.id, 1)
      this.saveNote()
      this.$router.push({ path: '/' })
    },
    cancelEditNote () {
      this.notes[this.$props.id].edit = false
    },
    enableEditNote () {
      this.notes[this.$props.id].edit = true
    },
    emitNote () {
      this.notes[this.$props.id].edit = false
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
