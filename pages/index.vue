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

  <div>
    <h1>Contact</h1>

    <!-- Contact form -->
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input v-model="contact.name" type="text" id="name" required />
      </div>

      <div>
        <label for="email">Email:</label>
        <input v-model="contact.email" type="email" id="email" required />
      </div>

      <div>
        <label for="message">Message:</label>
        <textarea v-model="contact.message" id="message" required></textarea>
      </div>

      <button type="submit" :disabled="sendingContact">Send</button>
    </form>

  </div>
</template>

<script setup lang="ts">
import {useGetAllBlogsQuery} from "~/composables/useBlogsQuery";
import { useSendContactQuery } from '~/composables/useContactQuery';
const {data: allBlogs, error, isLoading: loadingAllData} = useGetAllBlogsQuery();

// Data and loading states for contact form
const contact = ref({
  name: '',
  surname: '',
  email: '',
  message: '',
  datum_vnosa: new Date().toISOString()
});

// Use the mutation for sending the contact form
const { mutate: sendContact } = useSendContactQuery();

// Form submission handler
const handleSubmit = () => {
  sendContact(contact.value);
  contact.value.name = ''
  contact.value.surname = ''
  contact.value.email = ''
  contact.value.message = ''
};
</script>
