<template>
  <div v-editable="blok" class="flex py-8 mb-6">
    <div v-for="picture in blok.uploads" :key="blok._uid" class="">
      <img :src="picture.filename" class="object-contain">
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
