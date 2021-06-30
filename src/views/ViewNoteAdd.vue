<template>
  <NoteHeader/>
  <section class="w-2/3 min-w-min mx-auto">
    <h1 class="mb-4 text-xl text-center">Add New Note</h1>
    <NoteAddForm  v-bind="$attrs"/>
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
