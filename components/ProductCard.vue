<template>
  <div class="max-w-md">
    <a href="/en/black-blouse-with-beige-embroidery.html">
      <img
        :src="pictureHover"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      />
      <div class="p-2 flex flex-col gap-4">
        <p>{{ title }}</p>
        <p class="font-semibold">€{{ price }}</p>
        <span class="flex gap-1">
          <div
            class="w-3 h-3 bg-red border border-black rounded-full bg-black"
          ></div>
          <div
            class="w-3 h-3 bg-red border border-black rounded-full bg-violet-300"
          ></div>
          <div
            class="w-3 h-3 bg-red border border-black rounded-full bg-yellow-100"
          ></div>
        </span>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      default: "Black blouse with beige embroidery",
      type: String,
    },
    price: {
      default: "49.99",
      type: String,
    },
    // primaryPicture: {
    //   default:
    //     "https://www.my-jewellery.com/media/catalog/product/cache/0021537bae359a5c22a4f8c00d758a48/b/l/black-blouse-with-beige-embroidery-front.jpg",
    //   type: String,
    // },
    // secondaryPicture: {
    //   default:
    //     "https://www.my-jewellery.com/media/catalog/product/cache/0021537bae359a5c22a4f8c00d758a48/b/l/black-blouse-with-beige-embroidery-close-up.jpg",
    //   type: String,
    // },
  },
  data() {
    return {
      primaryPicture:
        "https://www.my-jewellery.com/media/catalog/product/cache/0021537bae359a5c22a4f8c00d758a48/b/l/black-blouse-with-beige-embroidery-front.jpg",
      secondaryPicture:
        "https://www.my-jewellery.com/media/catalog/product/cache/0021537bae359a5c22a4f8c00d758a48/b/l/black-blouse-with-beige-embroidery-close-up.jpg",
      hover: false,
    };
  },
  computed: {
    pictureHover() {
      if (this.hover == true) {
        return this.secondaryPicture;
      } else {
        return this.primaryPicture;
      }
    },
  },
};
</script>

<style lang="postcss">
</style>
