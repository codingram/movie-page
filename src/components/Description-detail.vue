<template>
  <div>
    <b-row>
      <div class="descriptionOne p-4">
        <h5 class="text-white font-weight-bold">{{movieName}}</h5>
        <span class="bgcolortext p-1 text-white font-weight-bold">{{bgcolorText}}</span>
        <span class="durationText font-weight-bold ml-3">{{movieDuration}}</span>
        <div>
          <table class="dicsTable mt-3">
            <tr v-for="tablecontent in tablecontents" :key="tablecontent.index">
              <td class="tableTitle">{{tablecontent.title}}:</td>
              <td class="tableText" valign="bottom">{{tablecontent.content}}</td>
            </tr>
          </table>
        </div>
      </div>
    </b-row>
    <b-row>
      <div class="descriptionTwo pl-4 pt-3">
        <div class="float-left">
          <div>
            <font-awesome-icon :icon="['fa', 'star']" class="rating-icon mr-1"/>
            <font-awesome-icon :icon="['fa', 'star']" class="rating-icon mr-1"/>
            <font-awesome-icon :icon="['fa', 'star']" class="rating-icon mr-1"/>
            <font-awesome-icon :icon="['fa', 'star']" class="rating-icon mr-1"/>
            <font-awesome-icon :icon="['fa', 'star-half-alt']" class="rating-icon mr-1"/>
            <br>
            <span>140 votes</span>
          </div>
        </div>
        <div class="float-left rating-numbers-div ml-3 mt-1">
          <span class="rating-numbers">4.4</span>
        </div>
        <div class="float-right">
          Share:
          <a href="#">
            <font-awesome-icon :icon="['fab', 'facebook-square']" class="share-icons ml-2"/>
          </a>
          <a href="#">
            <font-awesome-icon :icon="['fab', 'twitter']" class="share-icons ml-2"/>
          </a>
          <a href="#">
            <font-awesome-icon :icon="['fab', 'google-plus-g']" class="share-icons ml-2"/>
          </a>
          <a href="#">
            <font-awesome-icon :icon="['fab', 'pinterest']" class="share-icons ml-2"/>
          </a>
        </div>
      </div>
    </b-row>
		<div class="pl-2">
			<hr>
		</div>
		<b-row>

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
.durationText {
  color: #ea6a00 !important;
  font-size: 11px;
}
.descriptionOne {
  height: auto;
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));

  .bgcolortext {
    font-size: 10px;
    background-color: #ea6a00;
  }

  .dicsTable {
    color: #fff;
    //   width: 275px;
  }

  @mixin tableContent {
    font-size: 12px;
    font-weight: 900;
  }

  .tableTitle {
    font-size: 13px;
    font-weight: 900;
    width: 14%;
  }

  .tableText {
    @include tableContent();
    color: #c3c3c3;
    padding-left: 12px;
  }
}

.descriptionTwo {
  height: auto;
  width: 100%;
	font-size: 13px;

  .rating-icon {
    color: #feaf00;
    font-size: 12px;
  }
  .rating-numbers-div {
    height: auto;
    line-height: auto;

    .rating-numbers {
      height: 20px;
      line-height: 20px;
      background-color: #feaf00;
      padding: 6px;
      border-radius: 50%;
      display: table-cell;
    }
  }
  .share-icons {
    color: #c3c3c3;
  }
}
</style>
