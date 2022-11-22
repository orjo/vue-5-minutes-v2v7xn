<template>
  <div v-editable="blok" class="py-2">
    {{ blok.date }} <span class="font-bold">{{ blok.location }}</span> /w {{ blok.with }}
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
