<template>
  <Navbar />
  <main>
    <router-view />
  </main>
  <footer>&copy; 2021 Kompletterad Filmvisarna</footer>
</template>


<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  created() {
    this.$store.dispatch("fetchAllMovies");
    this.$store.dispatch("fetchAllTodos");
    this.$store.dispatch("fetchViewings");
  },
};
</script>

<style scoped>
main {
  height: 100%;
  width: 100%;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  box-sizing: border-box;
  background: black;
}
@media only screen and (max-width: 600px) {
  .grid {
    grid-template-rows: 56px 1fr 45px;
  }
}
</style>