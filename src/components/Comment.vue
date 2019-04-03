<template>
  <div class="comment-div">
    <div class="descriptionHeading mt-5">
      <u>WRITE A COMMENT</u>
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
    <b-row>
      <b-col md="4">
        <label>
          Name
          <span class="astrik">*</span>
        </label>
        <b-form-input class="comment-input"></b-form-input>
      </b-col>
      <b-col md="4">
        <label>
          Email
          <span class="astrik">*</span>
        </label>
        <b-form-input class="comment-input"></b-form-input>
      </b-col>
      <b-col md="4">
        <label>Website</label>
        <b-form-input class="comment-input"></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Comment"
};
</script>
<style scoped lang="scss">
.descriptionHeading {
  font-family: "Roboto Condensed", sans-serif;
  color: #ea6a00;
  font-size: 22px;
  font-weight: 600;
}
.astrik {
  color: #ea6a00;
}

.comment-div {
  font-size: 12px;
  color: #797979;
}

.headingdisc {
  font-size: 12px;
  color: #797979;
}

.comment-input {
  border-radius: 0;
  border: 1px solid #dbdbdb !important;
  resize: none;
}
</style>
