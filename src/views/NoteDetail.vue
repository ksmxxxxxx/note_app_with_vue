<template>
  <div v-for="item in items" :key="item.id" :title="item.title">
    <h1>{{  }}</h1>
    <p>本文</p>
  </div>
</template>

<script>
export default {
  /* eslint-disable no-console */
  name: 'NoteDetail',
  inject: ['items']
}
</script>
