<template>
  <Detail :title="this.fetchData().title" :body="this.fetchData().body"/>
  <div>
    <button>Edit</button>
    <button>Delete</button>
  </div>
</template>

<script>
import Detail from '@/components/Detail.vue'
export default {
  /* eslint-disable no-console */
  components: {
    Detail
  },
  name: 'NoteDetail',
  inject: ['items'],
  props: {
    id: Number,
    title: String,
    body: String
  },
  mounted () {
    console.log(this.fetchData())
  },
  methods: {
    fetchData () {
      const noteId = this.$props.id - 1
      const note = {}
      note.title = this.items[noteId].title
      note.body = this.items[noteId].body
      return note
    }
  }
}
</script>
