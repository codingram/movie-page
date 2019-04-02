<template>
  <div>
    <b-row class="overcontent">
      <b-col md="4" class="p-0">
        <img src="@/assets/images/orig.jpeg" alt class="movieimage">
      </b-col>
      <b-col md="8" class="pr-0">
        <Descdetail></Descdetail>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Descdetail from "@/components/Description-detail.vue";
export default {
  name: "BackgroundPoster",
  components: {
    Descdetail
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.movieimage {
  height: 525px;
  width: 100%;
}
.overcontent {
  margin-top: -245px;
}
</style>
