<template>
  <li><router-link :to="{ name: 'NoteDetail', params: {id: id, title: title, body: body} }">{{ title }}</router-link></li>
</template>

<script>
export default {
  name: 'ListItem',
  inject: ['items'],
  props: ['title', 'id', 'body']
}

</script>
