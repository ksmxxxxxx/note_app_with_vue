<template>
  <div class="note_list">
    <ul>
      <NoteListItem v-for="item in items" :key="item.id" :id="item.id" :title="item.title" :body="item.body"/>
    </ul>
  </div>
</template>

<script>
import NoteListItem from './NoteListItem.vue'

export default {
  name: 'NodeList',
  components: {
    NoteListItem
  },
  inject: ['items']
}
</script>
