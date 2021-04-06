<template>
  <ul>
    <ListItem v-for="item in items" :key="item.id" :id="item.id" :title="item.title" :body="item.body"/>
  </ul>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
export default {
  components: {
    ListItem
  },
  name: 'List',
  inject: ['items']
}
</script>
