<template>
  <div>
    <b-row class>
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
      <div class="descriptionTwo p-4">
				<font-awesome-icon :icon="['fa', 'star']" class="rating-icon mr-1"/>
				<font-awesome-icon :icon="['fa', 'star']" class="rating-icon mr-1"/>
				<font-awesome-icon :icon="['fa', 'star']" class="rating-icon mr-1"/>
				<font-awesome-icon :icon="['fa', 'star']" class="rating-icon mr-1"/>
				<font-awesome-icon :icon="['fa', 'star-half-alt']" class="rating-icon mr-1"/>
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
.durationText {
  color: #ea6a00 !important;
  font-size: 11px;
}
.descriptionOne {
  height: auto;
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
}
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

.rating-icon{
	color: #feaf00;
	font-size: 12px;
}
</style>
