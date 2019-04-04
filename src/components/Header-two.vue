<template>
  <div>
    <b-row>
      <b-container class="p-0">
        <b-col md="10" class="mx-auto p-0">
          <b-navbar toggleable="lg" class="px-0">
            <b-navbar-brand class="brandname" href="#">MOVIAK</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav>
                <b-nav-form>
                  <b-form-input
                    size="sm"
                    class="mr-sm-2 navbar-input"
                    placeholder="Movie Search..."
                  ></b-form-input>
                  <b-button size="sm" class="my-2 my-sm-0 roundBtn border-0">GO</b-button>
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
    </b-row>
  </div>
</template>

<script>
export default {
  name: "HeaderTwo"
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

.navbar-input {
  border-radius: 20px;
}

b-navbar-brand {
  color: #ea6a00;
}

.roundBtn {
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
  text-decoration: none;
}

.navbar-light .navbar-nav .nav-link {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #000;

  &:hover {
    color: #ea6a00 !important;
    transition: 0.2s;
  }
}
.navbar-input {
  border: 2px solid #dfdfdf;

  &::placeholder {
    font-size: 12px;
    margin: 5px;
  }
}
</style>
