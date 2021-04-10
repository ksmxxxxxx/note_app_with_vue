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
    }
  },
  props: ['id'],
  components: {
    Detail
  },
  name: 'NoteDetail'
}
</script>
