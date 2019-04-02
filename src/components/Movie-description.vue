<template>
  <div>
    <b-row>
      <b-container>
        <b-col md="10" class="mx-auto">
          <b-row class="overcontent">
            <b-col md="4" class="p-0">
              <img src="@/assets/images/orig.jpeg" alt class="movieimage">
            </b-col>
            <b-col md="8">
              <Descdetail></Descdetail>
            </b-col>
          </b-row>
        </b-col>
      </b-container>
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
    return {

    };
  }
};
</script>
<style lang="scss">
.movieimage{
	height: 475px;
	width: 100%;
}
.overcontent{
  margin-top: -245px;
}
</style>
