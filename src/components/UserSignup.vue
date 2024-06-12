<template>
   <div class="signup">
    <h1>Signup</h1>
    <form @submit.prevent="signup">
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
      <button type="submit">Signup</button>
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
    async signup() {
      // Implement your signup logic here
      try {
        const response = await axios.post('http://localhost:4000/auth/signup', {
          username: this.username,
          password: this.password,
        });
        if (response.data.success) {
          alert('Signup successful');
          this.$router.push('/');
        } else {
          alert('Signup failed');
        }
      } catch (error) {
        console.error('Signup error:', error);
        alert('Signup failed');
      }
    },
  },
};
</script>

<style scoped>
.signup {
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
