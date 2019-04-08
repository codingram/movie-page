<template>
  <div class="fulfooter-div">
    <div class="footerimage mt-5 pt-4">
      <b-container class="p-0">
        <div class="all-side-padding">
          <b-row>
            <b-col md="3">
              <div class="pb-3">
                <img src="../assets/images/logo.png" alt="moviak" />
              </div>
              <div class="col1-content pl-1">
                Lorem ipsum dolor sit, amet conirsecr temibus itaque dicta
                adipisicing elit. Provi iusto evenpeiet maiores, vitae corporis,
                tempobus itaque dicta, asperiores nesciunt atque aven. Explicabo
                et veritatis nesciunt quo repudiandae, ipsum dolo
                <div class="rating-numbers-div">
                  <ul class="p-0 mt-3">
                    <li>
                      <a href="#">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <font-awesome-icon :icon="['fab', 'twitter']" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <font-awesome-icon :icon="['fab', 'google-plus-g']" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <font-awesome-icon :icon="['fab', 'pinterest']" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>
            <b-col md="3" class="pl-4">
              <h5 class="col2-head font-weight-bold">Custom Services</h5>
              <div class="col2-content mt-3">
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
                  <div class="post-title">
                    Doctor Strange assembles with the Avengers
                  </div>
                  <div class="post-date">December 20,2016</div>
                </div>
                <div class="recent-post">
                  <div class="post-title">
                    5 movies to watch this week(29 Sep 2016)
                  </div>
                  <div class="post-date">December 20,2016</div>
                </div>
              </div>
            </b-col>
            <b-col md="3">
              <h5 class="col4-head font-weight-bold">Contact Us</h5>
              <div class="col4-content mt-3">
                <ul>
                  <li>
                    <font-awesome-icon
                      :icon="['fab', 'telegram-plane']"
                      class="mr-2"
                    />9067 Zurich,Switzerland 87
                  </li>
                  <li>
                    <font-awesome-icon
                      :icon="['far', 'envelope']"
                      class="mr-2"
                    />abc@gmail.com
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fas', 'phone']" class="mr-2" />
                    <span class="contact-no">01-234-5678</span>
                  </li>
                </ul>

                <div class="input-group mb-3 pr-4 pt-1">
                  <input
                    type="text"
                    class="form-control contact-input"
                    placeholder="Your email address"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text p-1">
                      <font-awesome-icon
                        :icon="['fas', 'envelope-open-text']"
                        class="mr-2"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
    <div class="footer-two">
      <div class="leftside float-left">© Copyright 2016 Movie</div>
      <div class="right-side float-right pr-4">
        <a href>Privacy Policy</a>
        <a href>Terms of us</a>
        <a href>Site Map</a>
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
  padding: 0 8rem;

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
  height: auto;
  width: 100%;
  background: linear-gradient(to bottom rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
    url("../assets/images/11.jpg");
  background-size: cover;
  background-position: center;
  color: #ffffff;
  font-family: $robotoM;
  letter-spacing: 0px;

  .all-side-padding {
    padding: 3rem;
  }

  .col1-head {
    font-family: $robotoC;
    font-size: 22px;
  }

  .col2-head {
    font-family: $robotoC;
    font-size: 22px;
  }

  .col3-head {
    font-family: $robotoC;
    font-size: 22px;
  }

  .col4-head {
    font-family: $robotoC;
    font-size: 22px;
  }

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

        &:hover {
          background-color: $dimOrange;
          transition: 0.3s;
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
    font-family: $robotoC;

    .post-title {
      font-size: 12px;
      color: $contentColor;
    }

    .post-date {
      font-size: 11px;
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

    .form-control {
      padding: 0;
      border-radius: 0;
      font-size: 13px;
      background-color: $commentText;
      opacity: 0.7;
      height: 35px;
      border: none;

      &::placeholder {
        color: #9c9c9c;
        padding-left: 20px;
      }

      :focus {
        outline: none;
      }
    }

    .input-group-append {
      margin-left: 0px;
      background-color: transparent;
    }

    .input-group-text {
      padding: 0.375rem 0.75rem;
      margin-bottom: 0;
      color: #ffffff;
      background-color: $commentText;
      opacity: 0.7;
      text-align: center;
      border: none;
      border-radius: 0;
    }

    // .contact-input {
    // background-color: $commentText;
    // opacity: 0.7;
    // height: 35px;
    // border: none;

    // &::placeholder {
    //   color: $greyishWhite;
    //   padding-left: 20px;
    // }

    // :focus {
    //   outline: none;
    // }
    // }
  }
}

@media only screen and (max-width: 600px) {
  .all-side-padding {
    padding: 0;
  }
  .fulfooter-div {
    margin: 0 -30px 0 -30px;
  }
  .col4-head {
    margin-top: 20px;
    margin-bottom: -10px;
  }
  .col3-head {
    margin-bottom: -10px;
  }
  .footer-two {
    height: 50px;
    line-height: 25px;
    .right-side {
      text-align: center;
      clear: both;
      margin: 0 auto;
    }
    .left-side {
      text-align: center;
    }
  }
}
</style>
