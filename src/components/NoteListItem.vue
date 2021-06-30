<template>
  <li class="hover:bg-gray-100"><router-link :to="{ name: 'ViewNoteDetail', params: {id: index} }" class="block py-1 px-3"><span class="caret"></span>{{ title }}</router-link></li>
</template>

<script>
export default {
  name: 'NoteListItem',
  props: ['index', 'title']
}
</script>

<style scoped>
a:hover .caret {
  width: 1.4rem;
  height: 1.4rem;
  margin-left: -.7rem;
  @apply block;
  @apply absolute;
  clip: rect(auto auto 1.5rem auto);
}
.caret::after {
  content: '';
  width: 1rem;
  height: 1rem;
  @apply absolute;
  left: -.7rem;
  top: .2rem;
  @apply bg-indigo-700;
  @apply transform;
  @apply rotate-45;
}
</style>
