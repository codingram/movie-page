<template>
  <div>
    <b-col md="10" class="mx-auto p-0">
      <b-navbar toggleable="lg">
        <b-navbar-brand class="brandname" href="#">MOVIAK</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav>
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2 navbar-input" placeholder="Movie Search"></b-form-input>
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
  </div>
</template>

<script>
export default {
  name: "HeaderTwo"
};
</script>
<style scoped lang="scss">
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
</style>
