<template>
    <!-- <UInput :color="color" :variant="variant" :placeholder="placeholder" /> -->
     <input :placeholder="placeholder" />
  </template>
  
<script>
// defineProps({
//   placeholder: String,
//   color: String,
//   variant: String
// })

export default {
  props: {
    placeholder: {
      type: String,
      required: true,
    },
  }
}

</script>