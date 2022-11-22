<template>
  <div v-editable="blok" class="flex flex-col items-center py-4">
    <img
      :src="blok.image.filename"
      :alt="blok.image.name"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
