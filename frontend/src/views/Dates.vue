<template>
  <div class="container">
    <div class="component-title">
      <h1>All current viewings</h1>
    </div>
    <div class="viewing-list">
      <div v-for="viewing in viewings" :key="viewing.id" class="movie">
        
          
          <div class="movie-details" @click="$router.push('/viewings/' + viewing.id)">
            <div class="text">
              <h6>
                {{ viewing.date }} 20:00 | {{ viewing.title }} |
                {{ viewing.seat_amount }} seats left
              </h6>
            </div>
          </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    viewings() {
      return this.$store.state.allViewings;
    },
  },
};
</script>

<style scoped>
.viewing-list {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
}
.container {
  width: 100%;
  height: 100%;
}
.movie-details {
  width: 310px;
  height: 70px;
 
  border: 3px solid rgb(87, 82, 81);
  cursor: pointer;
  

  background: rgb(97, 93, 93);
  transition: width 2s;
}
.text {
  margin: 10px;
}

h1 {
  margin-top: 0;
}
</style>