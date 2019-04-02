<template>
  <div>
    <div class="mx-5 px-4">
      <Navbar></Navbar>
      <Backposter></Backposter>
      <Moviedisc></Moviedisc>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Backposter from "@/components/Background-poster.vue";
import Moviedisc from "@/components/Movie-description.vue";

export default {
  name: "NavBar",
  components: {
    Navbar,
    Backposter,
    Moviedisc
  }
};
</script>

<style scoped lang="scss">
</style>
