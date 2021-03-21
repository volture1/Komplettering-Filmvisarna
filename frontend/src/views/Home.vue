<template>
  <div class="container">
    <Movies/>
  </div>
</template>

<script>
// To add a component you first have to
// import it and then register it
// in the 'components' section
import Movies from "../components/Movies.vue";

export default {
  components: {
    Movies,
  },
};
</script>

<style scoped>
h1 {
  margin-top: 0;
}
</style>