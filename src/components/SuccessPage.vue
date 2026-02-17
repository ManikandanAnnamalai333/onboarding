<template>
  <div class="page">
    <h2 class="title">Success!</h2>
    <p class="subtitle">Your information has been submitted successfully.</p>
    <input type="button" value="Go to Home" @click="goHome" class="submit" />
  </div>
</template>
<script setup>
import router from '../router'
const goHome = async () => {
  await router.push({ name: 'PersonalDetails' })
}
</script>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f4f8;
}
.title {
  font-size: 2.5rem;
  color: #4caf50;
  margin-bottom: 1rem;
}
.subtitle {
  font-size: 1.2rem;
  color: #555;
}
.submit {
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.submit:hover {
  background-color: #45a049;
}
</style>
