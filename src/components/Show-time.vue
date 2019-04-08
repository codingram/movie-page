<template>
  <div class="showTime mt-4">
    <b-row>
      <div class="showtimeHeader mb-2">Showtime</div>
    </b-row>
    <b-row>
      <b-col md="12" class>
        <b-row>
          <b-col md="3" class="p-0">
            <div class="showtimeTitle backColor py-2 pl-3">
              <span class="iconColor">
                <font-awesome-icon
                  :icon="['fa', 'store']"
                  class="mr-2"
                /> </span
              >SELECT A CINEMA
            </div>
            <div class="cinemaList backColor mt-1 py-3 px-4">
              <ul class="m-0 p-0">
                <li
                  class="listStyle mt-1 pt-1"
                  v-for="list in cinemaList"
                  :key="list.index"
                >
                  {{ list }}
                </li>
              </ul>
            </div>
          </b-col>
          <b-col class="9">
            <div class="sidediv backColor"></div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "ShowTime",
  data() {
    return {
      cinemaList: ["GV Tampines", "GV Plaza", "GV Vatond Ketty"]
    };
  }
};
</script>
<style scoped lang="scss">
@import "../assets/scss/_variables.scss";
.showTime {
  .showtimeHeader {
    font-family: "Roboto Condensed", sans-serif;
    color: $darkOrange;
    font-size: 26px;
    font-weight: 600;
  }
  .showtimeTitle {
    width: 100%;
    font-size: 10px;
    font-weight: bolder;

    .iconColor {
      font-size: 14px;
      color: $darkOrange;
    }
  }
  .backColor {
    background-color: #f8f8f8;
  }

  .listStyle {
    list-style: none;
  }

  .cinemaList {
    font-family: "Roboto Condensed", sans-serif;
    letter-spacing: 1px;
    font-size: 12px;
    color: #7c7d7b;
    font-weight: bold;
    text-transform: uppercase;
  }

  .sidediv {
    width: 100%;
    height: 75px;
  }
}
@media only screen and (max-width: 600px) {
  .sidediv {
    margin-top: 10px;
  }
}
</style>
