<!-- ./app.vue -->
<template>
  <div>
    <h1>My blog site</h1>
    <ul>

      <!-- Loop through the articles array -->
      <li :data="article" v-for="(article, index) in articles" :key="article._id">
       <!-- Add a link for each slug and include the article slug in the directed path -->
       <nuxt-link :to="`/${article._slug}`">
          {{ article.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
 </template>

<script setup>
  //Import the query
  import { GetArticles } from "~/queries/get-articles";

  //Request the data from Prepr
  const { data } = await useAsyncQuery(GetArticles);

  //Assign the articles variable to all the articles from Prepr
  const articles = data.value.Articles.items;

 </script>
