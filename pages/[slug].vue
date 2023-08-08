./pages/[slug].vue

<template>
    <!-- Display title -->
    <h1 >
        {{ article.title }}
    </h1>
    <!-- Loop through the article content -->
    <div :key="contentType._id" v-for="contentType in article.content">

    <!-- Display images if they exist -->
      <div v-if="contentType.__typename === 'Assets'">
        <img
          v-if="contentType.items.length"
          :src="contentType.items[0]?.url"
          width="300"
          height="250"
        />
      </div>

      <!--Display the text in HTML format -->
      <div
        v-if="contentType.__typename === 'Text'"
        v-html="contentType.body"
      ></div>
    </div>
</template>

  <script setup>
    import { useRoute } from "vue-router";
    import {GetArticleBySlug} from "../queries/get-article-by-slug";

    // Use vue-router to determine the slug in the URL
    const route = useRoute();
    const slug = route.params.slug;

    // Request an article by the slug
    const articleQuery = await useAsyncQuery(GetArticleBySlug, {
        "slug": slug
    });

    // Assign the article variable to the article content from Prepr
    const article = articleQuery.data.value.Article;

   </script>
