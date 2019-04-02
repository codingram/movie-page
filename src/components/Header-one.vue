<template>
  <div>
    <b-row class="top-header">
      <b-container>
        <b-col md="10" class="mx-auto">
          <span class="top-header-brand">
            <font-awesome-icon :icon="['fab', 'apple']" class/>VIP
            <em>SWEEPSTAKES</em>
          </span>
          <span class="near-headerbrand-text font-weight-bold ml-3">$5000 SHOPPING SPREE</span>
          <span
            class="near-headerbrand-desc ml-2"
          >JoinMovies VIP for a chance to win. Don't forget to join during checkout</span>
          <span class="float-right login-text">
            <font-awesome-icon :icon="['fa', 'user']" class="mr-1"/>Login
          </span>
          <!-- <b-row>
            <b-col md="2">
              <span class="top-header-brand px-2">
                <font-awesome-icon :icon="['fab', 'apple']" class/>VIP
                <em>SWEEPSTAKES</em>
              </span>
            </b-col>
            <b-col md="8">
              <span class="near-headerbrand-text font-weight-bold ml-3">$5000 SHOPPING SPREE</span>
              <span
                class="near-headerbrand-desc ml-2"
              >JoinMovies VIP for a chance to win. Don't forget to join during checkout</span>
            </b-col>
            <b-col md="2">
              <span class="float-right login-text">
                <font-awesome-icon :icon="['fab', 'apple']" class="mr-1"/>Login
              </span>
            </b-col>
          </b-row>-->
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
.top-header {
  background-color: black;
  // padding: 5px 0;
  font-size: 15px;
  //   height: 26px;
  line-height: 1.3;

  .top-header-brand {
    color: #ffffff;
    background-color: #9c5d9e;
  }

  .near-headerbrand-text {
    color: #ea6a00;
    font-size: 13px;
  }
  @mixin topheader-mixin {
    color: #858586;
    font-size: 13px;
  }
  .near-headerbrand-desc {
    @include topheader-mixin();
  }

  .login-text {
    @include topheader-mixin();
  }
}
</style>
