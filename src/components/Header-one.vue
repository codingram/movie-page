<template>
  <div class="">
    <!-- <b-row class="top-header">
      <b-container class="p-0">
        <b-col md="10" class="mx-auto p-0">
          <span class="top-header-brand">
            <font-awesome-icon :icon="['fab', 'apple']" />VIP
            <em>SWEEPSTAKES</em>
          </span>
          <span class="near-headerbrand-text font-weight-bold ml-3"
            >$5000 SHOPPING SPREE</span
          >
          <span class="near-headerbrand-desc ml-2">
            JoinMovies VIP for a chance to win. Don't forget to join during
            checkout
          </span>
          <a href="#">
            <span class="float-right login-text">
              <font-awesome-icon :icon="['fa', 'user']" class="mr-1" />Login
            </span>
          </a>
        </b-col>
      </b-container>
    </b-row> -->
    <b-row class="m-0 top-header">
      <b-container class="p-0">
        <b-col md="12" class="mx-auto p-0">
          <b-row>
            <b-col md="9">
              <b-row>
                <b-col md="2" class="mr-3 pr-0">
                  <span class="top-header-brand">
                    <font-awesome-icon :icon="['fab', 'apple']" />VIP
                    <em>SWEEPSTAKES</em>
                  </span>
                </b-col>
                <b-col md="2" class="m-0 p-0">
                  <span class="near-headerbrand-text font-weight-bold ml-3"
                    >$5000 SHOPPING SPREE</span
                  >
                </b-col>
                <b-col md="7" class="mx-auto p-0">
                  <span class="near-headerbrand-desc ml-2">
                    JoinMovies VIP for a chance to win. Don't forget to join during
                    checkout
                  </span>
                </b-col>
              </b-row>
            </b-col>
            <b-col md="1" class="mx-auto">
              <a href="#">
                <span class="float-right login-text">
                  <font-awesome-icon :icon="['fa', 'user']" class="mr-1" />Login
                </span>
              </a>
            </b-col>
          </b-row>
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
  height: auto;
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
@media only screen and (max-width: 600px) {
  .top-header {
    text-align: center;
  }
}
</style>
