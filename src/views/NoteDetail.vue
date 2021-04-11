<template>
  <Detail :id="this.$props.id"/>
</template>

<script>
import Detail from '@/components/Detail.vue'
export default {
  props: ['id'],
  components: {
    Detail
  },
  name: 'NoteDetail'
}
</script>
