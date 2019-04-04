<template>
  <div>
    <div class="footerimage mt-5">
      <b-container class="p-5">
        <div class="p-5">
          <b-row>
            <b-col md="3">
              <div class="pb-3">
                <img src="../assets/images/logo.png" alt="moviak">
              </div>
              <div class="col1-content">
                Lorem ipsum dolor sit, amet consecr temibus itaque dicta adipisicing elit. Provi iusto eveniet maiores, vitae corporis, tempobus itaque dicta, asperiores nesciunt atque a. Explicabo et veritatis nesciunt quo repudiandae, ipsum dolo
                <div class="rating-numbers-div">
                  <ul class="p-0 mt-3">
                    <li>
                      <a href="#">
                        <font-awesome-icon :icon="['fab', 'facebook-f']"/>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <font-awesome-icon :icon="['fab', 'twitter']"/>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <font-awesome-icon :icon="['fab', 'google-plus-g']"/>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <font-awesome-icon :icon="['fab', 'pinterest']"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>
            <b-col md="3">
              <h5 class="col2-head font-weight-bold">Custom Services</h5>
              <div class="col2-content">
                <ul>
                  <li>
                    <a href="#">Help & Contact</a>
                  </li>
                  <li>
                    <a href="#">Return Policy</a>
                  </li>
                  <li>
                    <a href="#">Feed Back</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
            </b-col>
            <b-col md="3">
              <h5 class="col3-head font-weight-bold">Recent Posts</h5>
              <div class="col3-content mt-3">
                <div class="recent-post mb-4">
                  <div class="post-title">Doctor Strange assembles with the Avengers</div>
                  <div class="post-date">December 20,2016</div>
                </div>
                <div class="recent-post">
                  <div class="post-title">5 movies to watch this week(29 Sep 2016)</div>
                  <div class="post-date">December 20,2016</div>
                </div>
              </div>
            </b-col>
            <b-col md="3">
              <h5 class="col4-head font-weight-bold">Contact Us</h5>
              <div class="col4-content mt-3">
                <ul>
                  <li>
                    <font-awesome-icon :icon="['fab', 'telegram-plane']" class="mr-2"/>9067 Zurich,Switzerland 87
                  </li>
                  <li>
                    <font-awesome-icon :icon="['far', 'envelope']" class="mr-2"/>abc@gmail.com
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'phone']" class="mr-2"/>
                    <span class="contact-no">01-234-5678</span>
                  </li>
                </ul>

                <div class="input-group mb-3 pr-5">
                  <input
                    type="text"
                    class="form-control contact-input"
                    placeholder="Your email id"
                  >
                  <div class="input-group-append">
                    <span class="input-group-text"><font-awesome-icon :icon="['fas', 'envelope-open-text']" class="mr-2"/></span>
                  </div>
                </div>
                <input type="text" class="contact-input" placeholder="Your email id">
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
    <div class="footer-two">
      <div class="px-5 mx-5">
        <div class="leftside float-left">© Copyright 2016 Movie</div>
        <div class="right-side float-right">
          <a href>Privacy Policy</a>
          <a href>Terms of us</a>
          <a href>Site Map</a>
        </div>
      </div>
    </div>
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
@import "../assets/scss/_variables.scss";

.footer-two {
  background: #000000;
  height: 50px;
  line-height: 50px;
  width: 100%;
  font-size: 12px;
  color: $iconBackground;
  .right-side {
    text-align: left;
    a {
      color: $iconBackground;
      padding: 0 5px;
      text-decoration: none;
    }
  }
}
.footerimage {
  height: 400px;
  width: 100%;
  background: linear-gradient(to bottom rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
    url("../assets/images/11.jpg");
  background-size: cover;
  background-position: center;
  color: #ffffff;

  .col1-content {
    color: $contentColor;
    font-size: 13px;

    ul {
      list-style: none;

      li {
        display: inline-block;
        background-color: $iconBackground;
        border-radius: 50%;
        margin-right: 5px;

        a {
          color: $greyishWhite;
          display: table-cell;
          vertical-align: middle;
          text-align: center;
          text-decoration: none;
          font-size: 12px;
          height: 32px;
          width: 32px;

          &:hover {
            color: $greyishWhite;
            text-decoration: none;
          }
        }
      }
    }
  }

  .col2-content {
    color: $contentColor;
    font-size: 13px;

    ul {
      list-style: none;
      padding-left: 0;
      li {
        line-height: 32px;
        a {
          color: $greyishWhite;
          text-decoration: none;
        }
      }
    }
  }

  .col3-content {
    .post-title {
      font-size: 11px;
      color: $contentColor;
    }

    .post-date {
      font-size: 10px;
      color: $commentText;
    }
  }

  .col4-content {
    font-size: 13px;
    ul {
      list-style: none;
      padding-left: 0;
      li {
        line-height: 24px;
        color: $greyishWhite;
      }
    }

    .contact-no {
      color: $brightOrange;
    }

    .form-control{
    color: #495057;
    padding: 0;
    border-radius: 0;
      }

    .contact-input {
      background-color: $commentText;
      opacity: 0.7;
      height: 35px;
      border: none;

      &::placeholder {
        color: $greyishWhite;
        padding-left: 20px;
      }

    }
  }
}
</style>
