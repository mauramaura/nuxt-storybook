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
  <h2 class="text-3xl m-4 bg-violet-500 p-4 rounded">Blog posts</h2>
  <div class="m-4 w-96">
    <form @submit.prevent="submitForm" class="flex flex-col gap-4">
      <div class="flex flex-col">
        <label for="name" class="mb-2">Title</label>
        <UInput
          type="text"
          v-model="formData.title"
          id="title"
          placeholder="Enter your title here"
          size="xl"
        />
      </div>
      <div class="flex flex-col">
        <label for="content" class="mb-2">Content</label>
        <UTextarea
          id="message"
          v-model="formData.content"
          placeholder="Your post..."
          size="xl"
        />
      </div>
      <div>
        <UButton
          class="mt-4 w-full flex justify-center"
          type="submit"
          color="violet"
          >Submit Form</UButton
        >
      </div>
    </form>
  </div>
  <div class="flex flex-wrap">
    <div
      v-for="post in posts"
      class="m-4 flex-wrap gap-8 border border-violet-400 p-4 rounded w-96 h-80"
    >
      <button class="float-end">
        <UIcon name="lucide:trash-2" class="w-5 h-5" @click="isOpen = true" />
      </button>
      <UModal v-model="isOpen">
      <div class="flex flex-col p-4 items-center gap-5">
        <p>Are you sure you want to delete this post?</p>
        <div class="flex gap-9">
          <UButton color="red" @click="deletePost(post.id)">Yes</UButton>
          <UButton>No</UButton>
        </div>
      </div>
    </UModal>

      <div class="flex flex-col gap-2">
        <p class="text-xl">{{ post.title }}</p>
        <p>{{ post.content }}</p>
        <p>
          This is the ID: <strong>{{ post.id }}</strong>
        </p>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const posts = ref([]);
const isOpen = ref(false);

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
  formData.value.title = "";
  formData.value.content = "";
  getData();
};

const deletePost = async (id) => {
  console.log("Deleting post with id:", id);

  try {
    const { data: responseData, error } = await useFetch(
      `http://localhost:8000/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    getData();

    if (error) {
      console.error("Error deleting post:", error);
      return;
    }

    console.log("Post deleted successfully:", responseData);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

async function getData() {
  const url = "http://localhost:8000/posts/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    posts.value = json;
    console.log(posts.value)
  } catch (error) {
    console.error(error.message);
  }
}

onMounted(() => {
  getData();
});
</script>

<style></style>
