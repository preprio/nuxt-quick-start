./pages/[slug].vue

<template>
    <!-- Display title -->
    <h1 >
        {{ post.title }}
    </h1>
    <!-- Loop through the article content -->
    <div :key="contentType._id" v-for="contentType in post.content">

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
    import {GetPostBySlug} from "~/queries/get-post-by-slug";

    // Use vue-router to determine the slug in the URL
    const route = useRoute();
    const slug = route.params.slug;

    // Request an article by the slug
    const postQuery = await useAsyncQuery(GetPostBySlug, {
        "slug": slug
    });

    // Assign the article variable to the article content from Prepr
    const post = postQuery.data.value.Post;

   </script>
