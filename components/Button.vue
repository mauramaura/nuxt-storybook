<template>
  <div class="flex gap-4 m-8">
    <UButton class="w-3" loading color="black" size="md">Example button</UButton>
    <UButton color="black" icon="material-symbols:add">Add to cart</UButton>
    <UButton square color="white" icon="material-symbols:favorite-outline"></UButton>
    <UInput
    icon="i-heroicons-magnifying-glass-20-solid"
    size="sm"
    color="white"
    :trailing="true"
    placeholder="Search..."
  />
  
  </div>
  <div class="w-52 m-8 flex items-center">
    <UIcon name="material-symbols-light:star-rate" class="w-8 h-8 bg-pink-200" />
    <UIcon name="material-symbols-light:star-rate" class="w-8 h-8 bg-pink-200" />
    <UIcon name="material-symbols-light:star-rate" class="w-8 h-8 bg-pink-200" />
    <UIcon name="material-symbols-light:star-rate" class="w-8 h-8 bg-pink-200" />
    <UIcon name="material-symbols-light:star-rate" class="w-8 h-8 bg-pink-200" />
    (1)
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>