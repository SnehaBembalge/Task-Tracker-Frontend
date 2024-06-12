<template>
   <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" />
      </div>
      <br><br>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" />
      </div>
      <br><br>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      // Implement your login logic here
      try {
        const response = await axios.post('http://localhost:4000/auth/login', {
          username: this.username,
          password: this.password,
        });
        if (response.data.success) {
          this.$router.push('/tasks');
        } else {
          alert('Login failed');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('Login failed');
      }
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h2 {
  margin-top: 0;
  text-align: center;
}
</style>
