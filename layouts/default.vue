<template>
  <v-app>
    <div class="border">
      <div class="page">
        <div class="container-page">
          <nuxt />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.border {
  height: 100vh;
  background-color: black;
  display: flex;
  padding: 60px;
  background-image: url();
}
.page {
  font-family: "Gotham Pro";
  background-color: white;
  display: flex;
  flex: 1;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.container-page {
  flex: 1;
  background-color: #f8f8f8;
  height: auto;
  padding: 8px;
  margin: 30px;
  border-radius: 10px;
  overflow: auto;
}
</style>
