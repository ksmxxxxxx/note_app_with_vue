<template>
  <li v-for="item in items" :key="item.id" :id="item.id" :title="item.title" :body="item.body">{{ item.title }}</li>
</template>

<script>
export default {
  name: 'ListItem',
  inject: ['items'],
  props: ['title', 'id', 'body']
}

</script>
