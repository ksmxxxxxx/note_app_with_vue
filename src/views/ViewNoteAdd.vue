<template>
  <NoteHeader/>
  <section>
    <h1>Add New Note</h1>
    <NoteAddForm/>
  </section>
</template>

<script>
import NoteHeader from '@/components/NoteHeader.vue'
import NoteAddForm from '@/components/NoteAddForm.vue'
export default {
  components: {
    NoteHeader,
    NoteAddForm
  },
  name: 'ViewNoteAdd'
}
</script>
