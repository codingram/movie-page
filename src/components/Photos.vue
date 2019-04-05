<template>
  <div class="carouselPhoto mt-4">
    <b-row class="carouselHeading">
      <div class="carouselPhotoHeader mb-2">Video & Photo</div>
      <div class="mb-2 ml-auto">
        <button class="sidebtn px-3 ml-2">
          <font-awesome-icon :icon="['fa', 'tape']" />1 video
        </button>
        <button class="sidebtn px-3 ml-2">
          <font-awesome-icon :icon="['fa', 'tape']" />6 photos
        </button>
      </div>
    </b-row>
    <b-row>
      <swiper :options="swiperOption" class="text-center">
        <swiper-slide v-for="img in carouselImg" :key="img.index">
          <img :src="img" alt class="carousel-img" />
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </b-row>
  </div>
</template>

<script>
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
export default {
  name: "Photo",
  data() {
    return {
      carouselImg: [img1, img2, img3, img4, img5, img6, img7],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  }
};
</script>
<style scoped lang="scss">
@import "../assets/scss/_variables.scss";
.carouselPhoto {
  .carouselHeading {
    margin: 0 -15px;
  }
  .carouselPhotoHeader {
    font-family: "Roboto Condensed", sans-serif;
    color: $darkOrange;
    font-size: 26px;
    font-weight: 600;
  }

  .sidebtn {
    background-color: #ffffff;
    font-size: 11px;
    color: $iconcColor;
    border-radius: 15px;
    border: 1px solid $iconcColor;
    outline: none;
  }

  .carousel-img {
    height: 150px;
    width: 100%;
  }
}
.swiper-button-prev {
  background-size: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  left: 0px;
  right: auto;
}

.swiper-button-next {
  background-size: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  right: 0px;
  left: auto;
}
</style>
