<template>
  <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/dates">Dates</router-link>
      
  </nav>
</template>

<script>
export default {
   
}
</script>

<style scoped>
nav {
    user-select: none;
    padding: 10px;
    text-align: center;
    border-bottom: 2px solid rgb(0, 0, 0);
    box-shadow: 0 0 5px 0 gray;
    background-image: linear-gradient(rgb(106, 107, 110), rgb(7, 11, 12));
    color: rgb(241, 241, 241);
}

a {
    text-decoration: none;
    color: rgb(241, 241, 241);
    font-weight: bold;
}

a:hover {
    color: rgb(40, 182, 94);
}
</style>