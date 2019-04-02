<template>
  <div>
    <div class="mx-5 px-4">
      <Navbar></Navbar>
      <Backposter></Backposter>
      <b-row>
        <b-container>
          <b-col md="10" class="mx-auto p-0">
            <Moviedisc></Moviedisc>
            <Wcomment></Wcomment>
          </b-col>
        </b-container>
      </b-row>

    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Backposter from "@/components/Background-poster.vue";
import Moviedisc from "@/components/Movie-description.vue";
import Wcomment from "@/components/Comment.vue";

export default {
  name: "NavBar",
  components: {
    Navbar,
    Backposter,
    Moviedisc,
    Wcomment
  }
};
</script>

<style scoped lang="scss">
</style>
