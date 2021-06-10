<template>
  <li><router-link :to="{ name: 'Detail', params: {id: id} }">{{id}}:{{ title }}</router-link></li>
</template>

<script>
export default {
  name: 'NoteListItem',
  inject: ['items'],
  props: ['title', 'id', 'body']
}

</script>
