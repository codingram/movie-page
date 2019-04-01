<template>
  <div>
    <div>
      <b-container>
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
                <font-awesome-icon :icon="['fab', 'apple']" class="mr-1"/>Login
              </span>
            </b-col>
          </b-container>
        </b-row>
      </b-container>
    </div>

    <!-- NavBar Start -->

    <div>
      <b-container>
				<b-col md="10" class="mx-auto p-0">
        <b-navbar toggleable="lg" varient="light">
          <b-navbar-brand class="brandname" href="#">MOVIAK</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>


            <!-- Right aligned nav items -->
            <b-navbar-nav>
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2 navbar-input" placeholder="Movie Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0 btn-donate border-0">GO</b-button>
              </b-nav-form>
            </b-navbar-nav>

						<b-navbar-nav class="ml-auto">
              <b-nav-item href="#">HOME</b-nav-item>
							<b-nav-item href="#">MOVIE LAYOUT</b-nav-item>
							<b-nav-item href="#">PAGE SINGLE</b-nav-item>
							<b-nav-item href="#">SHOW TIME</b-nav-item>
							<b-nav-item href="#">TOP RATED</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
				</b-col>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
<style scoped lang="scss">
// TOP HEADER START*********************************************************
.top-header {
  background-color: black;
  // padding: 5px 0;
  font-size: 15px;

  .top-header-brand {
    color: #ffffff;
    line-height: 1;
    background-color: #9c5d9e;
  }

  .near-headerbrand-text {
    color: #ea6a00;
    font-size: 12px;
  }
  @mixin topheader-mixin {
    color: #858586;
    font-size: 12px;
  }
  .near-headerbrand-desc {
    @include topheader-mixin();
  }

  .login-text {
    @include topheader-mixin();
  }
}
// TOP HEADER END*********************************************************
.navbar-input{
	    border-radius: 20px;
}

b-navbar-brand{
	color: #ea6a00;
}

.btn-donate {
	background-color: #ea6a00;
	outline: none;
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none
}
</style>
