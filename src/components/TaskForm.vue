<template>
   <div class="task-form">
    <h1>New Task</h1>
    <form @submit.prevent="addTask">
      <div>
        <label for="title">Title:</label>
        <input type="text" v-model="title" />
      </div>
      <br><br>
      <div>
        <label for="description">Description:</label>
        <textarea v-model="description"></textarea>
      </div>
      <br><br>
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    async addTask() {
      // Implement your add task logic here
      try {
        const response = await axios.post('http://localhost:4000/tasks', {
          title: this.title,
          description: this.description,
        });
        if (response.data.success) {
          this.$router.push('/tasks');
        } else {
          alert('Failed to add task');
        }
      } catch (error) {
        console.error('Add task error:', error);
        alert('Failed to add task');
      }
    },
  },
};
</script>

<style scoped>
.task-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h1 {
  margin-top: 0;
  text-align: center;
}
</style>