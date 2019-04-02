<template>
  <div>
    <b-container>
    <headerOne></headerOne>
    <headerTwo></headerTwo>
    </b-container>
  </div>
</template>

<script>
  import headerOne from "@/components/Header-one.vue";
  import headerTwo from "@/components/Header-two.vue";
export default {
  name: "NavBar",
  components:{
      headerOne,
      headerTwo
  }
};
</script>
<style scoped lang="scss">

</style>
