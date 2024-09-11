<template>
    <button class="w-40 h-10 bg-fuchsia-400 text-white rounded-md">{{ label }}</button>
</template>
<script>
export default {
    props: {
        label: {
            default: 'A test button',
            type: String,
        }
    }
}
</script>
<style lang="postcss"></style>