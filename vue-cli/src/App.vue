<template>
  <router-view></router-view>
</template>

<script>
//import EmployesT from "@/components/EmployesT.vue";
export default {
  data() {
    return {
      age: 25,
    };
  },
  components: {
    // EmployesT,
  },
  methods: {
    logs() {
      console.log("Employees's Data saved !!");
    },
  },
};
</script>

<!--style-->
<style lang="scss" scoped>
@import "~bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
p {
  background-color: #2c3e50;
  color: white;
  width: 20%;
  margin: auto;
}
.em {
  position: relative;
  left: 200px;
}
</style>
