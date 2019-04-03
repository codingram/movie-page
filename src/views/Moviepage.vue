<template>
  <div>
    <div class="mx-5 px-4">
      <Navbar></Navbar>
      <Backposter></Backposter>
      <b-row>
        <b-container>
          <b-col md="10" class="mx-auto p-0">
            <Moviedisc></Moviedisc>
            <Photo></Photo>
            <Showtime></Showtime>
            <Wcomment></Wcomment>
          </b-col>
        </b-container>
      </b-row>
      <Footerdiv></Footerdiv>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Backposter from "@/components/Background-poster.vue";
import Moviedisc from "@/components/Movie-description.vue";
import Wcomment from "@/components/Comment.vue";
import Showtime from "@/components/Show-time.vue";
import Photo from "@/components/Photos.vue";
import Footerdiv from "@/components/Footer.vue";

export default {
  name: "NavBar",
  components: {
    Navbar,
    Backposter,
    Moviedisc,
    Wcomment,
    Showtime,
    Photo,
    Footerdiv
  }
};
</script>

<style scoped lang="scss">
</style>
