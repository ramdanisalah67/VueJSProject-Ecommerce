<template>
  <p>
    welcome To Your App state => {{ isActive }} ||
    {{ employees.map((e) => e.name) }}
  </p>
  <navBar />
  <EmployesT :emps="employees" :isActive="isActive" />
  <router-view></router-view>
</template>

<script>
import navBar from "@/components/navBar.vue";
import EmployesT from "@/components/EmployesT.vue";
export default {
  data() {
    return {
      isActive: true,
      employees: [
        {
          name: "salah-eddine",
          salary: 15,
        },
        {
          name: "yassine",
          salary: 19,
        },
      ],
      numbersEmp: 25,
    };
  },
  components: {
    navBar,
    EmployesT,
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
</style>
