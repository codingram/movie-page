<template>
  <div class="mx-3">
    <b-row class="top-header">
      <b-container class="p-0">
        <b-col md="10" class="mx-auto p-0">
          <span class="top-header-brand">
            <font-awesome-icon :icon="['fab', 'apple']" class/>VIP
            <em>SWEEPSTAKES</em>
          </span>
          <span class="near-headerbrand-text font-weight-bold ml-3">$5000 SHOPPING SPREE</span>
          <span
            class="near-headerbrand-desc ml-2"
          >JoinMovies VIP for a chance to win. Don't forget to join during checkout</span>
          <a href="#">
            <span class="float-right login-text">
              <font-awesome-icon :icon="['fa', 'user']" class="mr-1"/>Login
            </span>
          </a>
        </b-col>
      </b-container>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "HeaderOne"
};
</script>
<style scoped lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_mixins.scss";
.top-header {
  background-color: black;
  font-size: 13px;
  height: 28px;
  line-height: 28px;

  .top-header-brand {
    color: #ffffff;
    background-color: #9c5d9e;
    font-weight: bold;
    padding: 7px;
  }

  .near-headerbrand-text {
    color: $darkOrange;
    font-size: 12px;
    font-weight: bolder;
  }

  .near-headerbrand-desc {
    @include topheader-mixin();
  }

  .login-text {
    @include topheader-mixin();
  }
}
</style>
