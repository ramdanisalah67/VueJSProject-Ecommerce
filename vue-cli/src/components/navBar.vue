<template>
  <div>
    <ul class="bg-primary">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>
        <button class="btn btn-success" @click="print()">Login</button>
      </li>
      <li><ion-icon name="add-circle-outline"></ion-icon></li>
    </ul>
  </div>
</template>

<script>
import { IonIcon } from "@ionic/vue";
export default {
  name: "navBar",
  props: {
    employees: {
      type: Array,
      required: true,
    },
    nums: {
      type: Number,
      required: true,
    },
  },

  components: {
    IonIcon, // Make sure to include IonIcon as a component if you're using it in the template
  },
  data() {
    return {
      emp: "salah-eddine",
    };
  },
  methods: {
    print() {
      console.log(this.employee);
    },
  },
};
</script>

<style>
ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 60%;
  margin: auto;
  height: 30px;
  align-items: stretch;
}
ul li {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
}
ul li:hover {
  background-color: antiquewhite;
  color: black;
  cursor: pointer;
}
ion-icon {
  color: black;
  font-size: 40px;
}
</style>
