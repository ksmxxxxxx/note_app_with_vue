<template>
  <NoteHeader/>
  <NoteDetail v-bind="$attrs" :id="this.$props.id"/>
</template>

<script>
import NoteHeader from '@/components/NoteHeader.vue'
import NoteDetail from '@/components/NoteDetail.vue'
export default {
  props: ['id'],
  components: {
    NoteHeader,
    NoteDetail
  },
  name: 'ViewNoteDetail'
}
</script>
