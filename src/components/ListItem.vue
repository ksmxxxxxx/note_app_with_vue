<template>
  <li><router-link :to="{ name: 'NoteDetail', params: {id: index} }">{{ title }}</router-link></li>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['index', 'title']
}

</script>
