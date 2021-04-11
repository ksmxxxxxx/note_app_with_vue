<template>
  <section>
    <h1>Add New Note</h1>
    <NoteAddForm/>
  </section>
</template>

<script>
import NoteAddForm from '@/components/NoteAddForm.vue'
export default {
  components: {
    NoteAddForm
  },
  name: 'ViewNoteAdd'
}
</script>
