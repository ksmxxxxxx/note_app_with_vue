<template>
  <section>
    <h1>{{ title }}</h1>
    <p>{{ body }}</p>
  </section>
</template>

<script>
export default {
  name: 'Detail',
  props: ['title', 'body']
}
</script>
