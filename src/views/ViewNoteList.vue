<template>
  <NoteHeader/>
  <div class="w-2/3 min-w-min mx-auto">
    <NoteList/>
  </div>
  <div class="text-center">
    <router-link to="/add" class="bg-indigo-700 hover:bg-indigo-500 inline-block ring-4 ring-indigo-300 rounded-full py-3 px-6 text-white no-underline">Add Note</router-link>
  </div>
</template>

<script>
import NoteHeader from '@/components/NoteHeader.vue'
import NoteList from '@/components/NoteList.vue'
export default {
  components: {
    NoteHeader,
    NoteList
  },
  name: 'ViewNoteList'
}
</script>
