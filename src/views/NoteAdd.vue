<template>
  <section>
    <h1>Add New Note</h1>
    <Form/>
  </section>
</template>

<script>
import Form from '@/components/Form.vue'
export default {
  components: {
    Form
  },
  name: 'NoteAdd'
}
</script>
