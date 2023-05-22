<template>

  <!--Loop through elements in the queried stack and get the relevant components for the project -->
    <component
      v-for="element in stack"
      :key="element._id"
      :is="getComponent(element.__typename)"
      :data="element"
    ></component>
  
  </template>
  
  <script setup>
    import { computed } from "vue";
    import { reactive } from "vue";
    import PageHeader from "@/components/PageHeader";
    import ImageAndText from "@/components/ImageAndText";
  
    // Import the query
    import { GetPageBySlug } from "@/queries/getPageBySlug";

    // Import the vue-router to access the URL values
    import { useRoute } from "vue-router";
  
    // Get the utm campaign value from the URL
    const route = useRoute();
    const utm_campaign = (route.query.utm_campaign === undefined) ? "None" : route.query.utm_campaign;

    const components = [
      { name: "PageHeader", comp: PageHeader },
      { name: "ImageAndText", comp: ImageAndText },
    ];
  
    // Assign components for the stack loop above
  
    const getComponent = (name) => {
      const component = components.find((component) => component.name === name);
      return component ? component.comp : null;
    };
  
  // Execute query to retrieve a page by a slug 

  // Set the segment to the utm_campaign value assigned above
    const { data } = await useAsyncQuery(
      GetPageBySlug,
      {
        slug: "home",
        segment: utm_campaign,
      }
    );
  
  // Assign the retrieved page and stack
    const page = data.value.Page;
  
    const stack = computed(() => {
      return page.stack;
    });
    </script>
  