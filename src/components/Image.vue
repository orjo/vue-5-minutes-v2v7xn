<template>
  <div v-editable="blok" class="flex flex-col items-center py-4">
    <h1 class="text-4xl">{{ blok.title }}</h1>
    <img
      :src="blok.image.filename"
      :alt="blok.image.name"
      class="max-h-80 w-auto object-contain rounded-lg"
    />
    {{ blok.image.name }}
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
