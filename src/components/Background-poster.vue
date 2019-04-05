<template>
  <div>
    <div class="backposterimage"></div>
  </div>
</template>

<script>
export default {
  name: "BackgroundPoster",
  data() {
    return {};
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
@media only screen and (max-width: 600px) {
  .backposterimage {
    display: none;
  }
}
</style>
