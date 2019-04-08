<template>
  <div>
    <b-row>
      <div class="descriptionOne p-4">
        <h5 class="text-white font-weight-bold moviename">{{ movieName }}</h5>
        <span class="bgcolortext p-1 text-white font-weight-bold">
          {{ bgcolorText }}
        </span>
        <span class="durationText font-weight-bold ml-3">
          {{ movieDuration }}
        </span>
        <div>
          <table class="dicsTable mx-auto mt-3">
            <tr v-for="tablecontent in tablecontents" :key="tablecontent.index">
              <td class="tableTitle">{{ tablecontent.title }}:</td>
              <td class="tableText" valign="bottom">
                {{ tablecontent.content }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </b-row>
    <div class="pt-2">
      <b-row>
        <div class="descriptionTwo pt-2">
          <div class="float-left">
            <div>
              <font-awesome-icon
                :icon="['fa', 'star']"
                class="rating-icon mr-1"
              />
              <font-awesome-icon
                :icon="['fa', 'star']"
                class="rating-icon mr-1"
              />
              <font-awesome-icon
                :icon="['fa', 'star']"
                class="rating-icon mr-1"
              />
              <font-awesome-icon
                :icon="['fa', 'star']"
                class="rating-icon mr-1"
              />
              <font-awesome-icon
                :icon="['fa', 'star-half-alt']"
                class="rating-icon mr-1"
              />
              <br />
              <span class="vote-number">140 votes</span>
            </div>
          </div>
          <div class="float-left rating-numbers-div ml-3">
            <span class="rating-numbers font-weight-bold">4.4</span>
          </div>
          <div class="float-right shareicons-div">
            <span class="share-text">Share:</span>
            <a href="#">
              <font-awesome-icon
                :icon="['fab', 'facebook-f']"
                class="share-icons ml-2"
              />
            </a>
            <a href="#">
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                class="share-icons ml-2"
              />
            </a>
            <a href="#">
              <font-awesome-icon
                :icon="['fab', 'google-plus-g']"
                class="share-icons ml-2"
              />
            </a>
            <a href="#">
              <font-awesome-icon
                :icon="['fab', 'pinterest']"
                class="share-icons ml-2"
              />
            </a>
          </div>
        </div>
      </b-row>
    </div>
    <div class="pl-2 pt-2">
      <hr class="line-in-desc" />
    </div>
    <b-row>
      <div class="descriptionThree">
        <div class="descriptionHeading mb-3">Synopsis</div>
        <div class="descriptionContent">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "DescriptionDetail",
  data() {
    return {
      movieName: "Brotherhood",
      bgcolorText: "G",
      movieDuration: "02 hours 10 minutes",
      tablecontents: [
        {
          title: "Actor",
          content: "Alexander Cattly, Greta Garbo"
        },
        {
          title: "Director",
          content: "Mae West"
        },
        {
          title: "Genre",
          content: "Western"
        },
        {
          title: "Release",
          content: "June 12,2017"
        },
        {
          title: "Language",
          content: "English"
        },
        {
          title: "IMDB Rating",
          content: "8.5"
        },
        {
          title: "Cinema",
          content: "GV Tampines GV Plaza GV Vatond Ketty"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_mixins.scss";
.durationText {
  color: $darkOrange;
  font-size: 11px;
}

.line-in-desc {
  border-top: 1px solid #ececec;
  margin-right: -20px;
}

.descriptionOne {
  height: auto;
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));

  .moviename {
    font-family: $robotoC;
    font-size: 24px;
    letter-spacing: 0.5px;
  }

  .bgcolortext {
    font-size: 10px;
    background-color: $darkOrange;
  }

  .dicsTable {
    color: #fff;
  }

  .tableTitle {
    @include tableContent(13px, 900);
    width: 12%;
  }

  .tableText {
    @include tableContent(12px, 900);
    color: $iconcColor;
    padding-left: 12px;
  }
}

.descriptionTwo {
  height: 40px;
  width: 100%;
  font-size: 13px;
  padding-left: 1.5rem;

  .rating-icon {
    color: $mango;
    font-size: 11px;
  }
  .vote-number {
    color: #797979;
    font-size: 12px;
  }

  .share-text {
    font-weight: 900;
  }

  .rating-numbers-div {
    height: auto;
    line-height: auto;

    .rating-numbers {
      color: #ffffff;
      height: 20px;
      line-height: 20px;
      background-color: $mango;
      padding: 10px;
      border-radius: 50%;
      display: table-cell;
      font-size: 14px;
    }
  }
  .share-icons {
    font-size: 12px;
    color: $iconcColor;
  }
  .shareicons-div {
    line-height: 40px;
  }
}

.descriptionThree {
  padding-left: 1.5rem;

  .descriptionHeading {
    font-family: "Roboto Condensed", sans-serif;
    color: $darkOrange;
    font-size: 26px;
    font-weight: 600;
  }

  .descriptionContent {
    font-size: 12px;
    color: #797979;
  }

  p {
    margin: 2px;
    padding: 2px;
  }
}

@media only screen and (max-width: 600px) {
  .durationText {
    color: $darkOrange !important;
    font-size: 11px;
  }
  .descriptionOne {
    height: auto;
    width: 100%;
    background: #ffffff;
    color: #000000;
  }
  .tableTitle {
    width: 20%;
    text-align: right;
  }
  .tableText {
    text-align: left;
  }
  .bgcolortext {
    font-size: 10px;
    background-color: $darkOrange;
  }

  .dicsTable {
    width: 80%;
    color: $iconcColor;
  }

  .descriptionThree {
    padding-left: 0;
  }
  .descriptionTwo {
    padding-left: 0;
  }
}
</style>
