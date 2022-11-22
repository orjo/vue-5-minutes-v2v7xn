<template>
  <div v-editable="blok" class="py-2">
    <img :src="blok.image.filename"/>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
