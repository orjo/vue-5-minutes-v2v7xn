<template>
  <ul v-editable="blok" class="py-8 mb-6">
    <li v-for="blok in blok.items" :key="blok._uid">
      <StoryblokComponent :blok="blok" />
    </li>
  </ul>
</template>

<script setup>
defineProps({ blok: Object });
</script>
