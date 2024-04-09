<template>
  <div>welcome {{ age }}</div>
  <div>
    <button @click="changePlayer()" class="btn btn-success">
      changePlayer
    </button>
    <slot name="slote1"></slot>
    <slot name="slote2"></slot>
  </div>
</template>

<script>
export default {
  props: {
    age: {
      type: Number,
    },
  },
  data() {
    return {
      player: "messi",
    };
  },
  beforeCreate() {
    console.log("before created");
  },
  created() {
    console.log(" created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log(" mounted");
  },
  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    console.log(" updated");
  },
  beforeUnmount() {
    console.log(" before unmount");
  },
  unmouonted() {
    console.log(" unmounted");
  },

  methods: {
    changePlayer() {
      this.player = "ronaldo";
    },
  },
};
</script>
