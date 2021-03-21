<template>
  <div class="viewings-container">
    <div class="title" v-if="viewing">
      <h1>Title: {{ viewing.title }}</h1>
      <h1>Date: {{ viewing.date }}</h1>
      <h1>Seats left: {{ viewing.seat_amount }}</h1>
      <form @submit.prevent="handleSubmit">
        <p>Tickets:</p>
        <input v-model="seat_amount" type="number" />
        <p>Email:</p>
        <input v-model="email" type="text" />
        <br />
        <button
          v-if="viewing.seat_amount > 1"
          v-on:click="completeBooking(), (show = true)"
          class="bekräfta"
        >
          Create booking
        </button>
      </form>
    </div>
    <div class="confirmation-container" v-if="show">
      <h1>You booked {{ seat_amount }} seat(s)!</h1>
      <h3>Booking information sent to {{email}}</h3>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seat_amount: "",
      email: "",
      show: false,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },

    viewing() {
      return this.$store.state.allViewings.filter((v) => v.id === this.id)[0];
    },
    // viewings() {
    //   // Returns all viewings for this movie for dates in present and future
    //   return this.$store.state.allViewings.filter(
    //     (viewing) => viewing.title === this.movie.title
    //   );
    // },
  },
  methods: {
    completeBooking() {
      //this.$store.commit('setBookingRef', this.bookingId)

      let tempViewing = this.$store.state.allViewings.filter(
        (v) => v.id === this.id
      )[0];
      tempViewing.seat_amount -= this.seat_amount;

      this.$store.dispatch("updateViewing", tempViewing);
    },
    setShow() {
      return show;
    },
    // sortViewings() {
    //   // Sorts viewings by date
    //   this.viewings.sort((a, b) =>
    //     a.date > b.date ? 1 : b.date > a.date ? -1 : 0
    //   );
    //   // Filters out dates from the past
    //   let tempViewings = this.viewings.filter(
    //     (viewing) => viewing.date >= this.today
    //   );
    //   return tempViewings;
    // },
  },
  //might have here
};
</script>

<style scoped>
.title {
  font-size: 15px;
  color: red;
  text-align: center;
}
.viewings-container {
  height: 100%;
  width: 100%;
}
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.viewings-container {
  text-align: center;
}
</style>