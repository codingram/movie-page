<template>
  <div>
    <div class="backposterimage"></div>
    <!-- <img src="@/assets/images/backposter.jpg" alt="" class="backposterimage"> -->
  </div>
</template>

<script>
// import image1 from "@/assets/images/backposter.jpg" ;
export default {
  name: "BackgroundPoster",
  data() {
    return {
      // backposter: image1
    };
  }
};
</script>
<style lang="scss">
.backposterimage {
  height: 400px;
  width: 100%;
  background: url("../assets/images/backposter.jpg");
  background-size: cover;
  background-position: center;
}
</style>
