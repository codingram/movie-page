<template>
  <div>
    <b-row class="m-0 top-header">
      <b-container class="p-0">
        <b-col md="11" class="mx-auto">
          <b-row>
            <b-col md="2" class="p-0">
              <span class="top-header-brand">
                <font-awesome-icon :icon="['fab', 'apple']" />VIP
                <em>SWEEPSTAKES</em>
              </span>
            </b-col>
            <b-col md="2" class="m-0 p-0">
              <span class="near-headerbrand-text font-weight-bold"
                >$5000 SHOPPING SPREE</span
              >
            </b-col>
            <b-col md="6" class="mx-auto p-0">
              <span class="near-headerbrand-desc">
                JoinMovies VIP for a chance to win. Don't forget to join during
                checkout
              </span>
            </b-col>
            <b-col md="1" class="mx-auto pl-0">
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
    margin-left: -5px;
  }

  .near-headerbrand-desc {
    @include topheader-mixin(11px);
    margin-left: -50px;
  }

  .login-text {
    @include topheader-mixin(11px);
  }
}
@media only screen and (max-width: 600px) {
  .top-header {
    text-align: center;
  }
}
</style>
