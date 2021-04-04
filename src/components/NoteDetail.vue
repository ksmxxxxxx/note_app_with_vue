<template>
  <section>
    <h1>{{ title }}</h1>
    <div>{{ body }}</div>
  </section>
</template>

<script>
export default {
  name: 'NoteDetail',
  inject: ['items'],
  props: ['title', 'body'],
  created () {
    console.log(this)
  }
}
</script>
