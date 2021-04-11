<template>
  <li><router-link :to="{ name: 'ViewNoteDetail', params: {id: index} }">{{ title }}</router-link></li>
</template>

<script>
export default {
  name: 'NoteListItem',
  props: ['index', 'title']
}
</script>
