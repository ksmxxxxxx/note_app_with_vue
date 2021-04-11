<template>
  <NoteDetail :id="this.$props.id"/>
</template>

<script>
import NoteDetail from '@/components/NoteDetail.vue'
export default {
  props: ['id'],
  components: {
    NoteDetail
  },
  name: 'ViewNoteDetail'
}
</script>
