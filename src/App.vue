<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Welcome to My Vue.js App</h1>

  <SideBar :source="data" />
</template>

<script>
import BACKEND_DATA from "@/data";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "App",
  components: {
    SideBar,
  },
  data() {
    return {
      data: BACKEND_DATA,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
