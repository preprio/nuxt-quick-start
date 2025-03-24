<!-- ./app.vue -->
<template>
  <div>
    <h1>My blog site</h1>
    <ul>

      <!-- Loop through the articles array -->
      <li :data="post" v-for="(post, index) in posts" :key="post._id">
       <!-- Add a link for each slug and include the article slug in the directed path -->
       <nuxt-link :to="`/${post._slug}`">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
 </template>

<script setup>
  //Import the query
  import { GetPosts } from "~/queries/get-posts";

  //Request the data from Prepr
  const { data } = await useAsyncQuery(GetPosts);

  //Assign the articles variable to all the articles from Prepr
  const posts = data.value.Posts.items;

 </script>
