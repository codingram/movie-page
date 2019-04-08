<template>
  <div class="comment-div">
    <div class="descriptionHeading mt-4">
      <span class="commentunderline">WRITE A COMMENT</span>
    </div>
    <div class="headingdisc mt-1 mb-2">
      Your email address will not be published. Required fields are marked
      <span class="astrik">*</span>
    </div>
    <b-row>
      <b-col md="12">
        <label>
          Comment
          <span class="astrik">*</span>
        </label>
        <b-form-textarea class="comment-input"></b-form-textarea>
      </b-col>
    </b-row>

    <div class="mt-3">
      <b-row>
        <b-col md="4">
          <label class="mb-0">
            Name
            <span class="astrik">*</span>
          </label>
          <b-form-input class="comment-input"></b-form-input>
        </b-col>
        <b-col md="4">
          <label class="mb-0">
            Email
            <span class="astrik">*</span>
          </label>
          <b-form-input class="comment-input"></b-form-input>
        </b-col>
        <b-col md="4">
          <label class="mb-0">Website</label>
          <b-form-input class="comment-input"></b-form-input>
        </b-col>
      </b-row>
    </div>

    <div class="button-div float-right mr-3 mt-2">
      <b-row>
        <button class="post-btn px-3 py-2">POST COMMENT</button>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment"
};
</script>
<style scoped lang="scss">
@import "../assets/scss/_variables.scss";
.button-div {
  .post-btn {
    background-color: $darkOrange;
    font-size: 12px;
    color: white;
    outline: none;
    border: none;
    font-weight: 900;
  }
}

.descriptionHeading {
  font-family: "Roboto Condensed", sans-serif;
  color: $darkOrange;
  font-size: 19px;
  font-weight: 600;

  .commentunderline {
    border-bottom: 3px solid $darkOrange;
  }
}

.astrik {
  color: $darkOrange;
}

.comment-div {
  font-size: 12px;
  color: $commentText;
  margin: 0 -15px;
}

.headingdisc {
  font-size: 12px;
  color: $commentText;
}

.comment-input {
  border-radius: 0;
  border: 1px solid #f0f0f0;
  // resize: none;
}
</style>
