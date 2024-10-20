<template>
  <div class="flex gap-4">
    <!-- <UButton color="black" icon="material-symbols:add">Add to cart</UButton>
    <UButton square color="white" icon="material-symbols:favorite-outline"></UButton>
    <UInput
    icon="i-heroicons-magnifying-glass-20-solid"
    size="sm"
    color="white"
    :trailing="true"
    placeholder="Search..."
  /> -->
  </div>
  <!-- <div class="w-52 m-8 flex items-center">
    <UIcon name="material-symbols-light:star-rate" class="w-8 h-8 bg-pink-200" />
    <UIcon name="material-symbols-light:star-rate" class="w-8 h-8 bg-pink-200" />
    <UIcon name="material-symbols-light:star-rate" class="w-8 h-8 bg-pink-200" />
    <UIcon name="material-symbols-light:star-rate" class="w-8 h-8 bg-pink-200" />
    <UIcon name="material-symbols-light:star-rate" class="w-8 h-8 bg-pink-200" />
    (1)
  </div> -->
  <h2 class="text-3xl m-4 bg-red-500 p-4 rounded">Blog posts</h2>
  <div class="flex flex-wrap">
    <div
    v-for="post in posts"
    class="m-4 flex-wrap gap-8 border border-red-400 p-4 rounded w-96"
  >  
  <!-- <button class="float-end">
    <UIcon name="lucide:trash-2" class="w-5 h-5" />
  </button> -->
    
    <div class="flex flex-col gap-2">
      <p class="text-xl">{{ post.title }}</p>
      <p>{{ post.content }}</p>
    </div>
  </div>

  
  </div>
  <div class="m-4 w-96 ">
    <form @submit.prevent="submitForm" class="flex flex-col gap-4">
      <div class="flex flex-col">
        <label for="name">Title</label>
        <UInput
          type="text"
          v-model="formData.title"
          id="title"
          placeholder="Enter your title here"
        />
      </div>
      <div class="flex flex-col">
        <label for="content">Content</label>
        <UTextarea
          id="message"
          v-model="formData.content"
          placeholder="Your post..."
        />
      </div>
      <div>
        
        <UButton class="mt-4" type="submit">Submit Form</UButton>
      </div>
    </form>
  </div>

 
</template>

<script lang="ts" setup>
let posts;

import { ref } from "vue";

const formData = ref({
  title: "",
  content: "",
});

const submitForm = async () => {
  const { data: responseData } = await useFetch(
    "http://localhost:8000/posts/",
    {
      method: "post",
      body: {
        title: formData.value.title,
        content: formData.value.content,
      },
    }
  );

  console.log(responseData.value);
  formData.title = "";
  formData.content = "";
};

async function getData() {
  const url = "http://localhost:8000/posts/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    posts = json;
    console.log(posts, "posts");
  } catch (error) {
    console.error(error.message);
  }
}

getData();
</script>

<style></style>
