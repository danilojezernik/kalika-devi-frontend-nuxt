<template>
  <div>
    <h1>Dela</h1>

    <!-- Show loading spinner if data is still loading -->
    <div v-if="loadingAllData">
      <p>Loading...</p>
    </div>

    <!-- Show error message if there is an error -->
    <div v-else-if="error">
      <p>Error: {{ error.message }}</p>
    </div>

    <div v-else>
      <ul>
        <li v-for="blog in allBlogs" :key="blog._id">
          <h2> {{ blog.title }}</h2>
          <p>{{ blog.vsebina}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useGetAllBlogsQuery} from "~/composables/useBlogsQuery";

const {data: allBlogs, error, isLoading: loadingAllData} = useGetAllBlogsQuery();
</script>
