<template>
  <div class="parent">
    <div>welcome to about page</div>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "this is about page content",
    };
  },
};
</script>

<style scoped lang="scss">
.parent {
  background-color: antiquewhite;
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto;
  div {
    width: 20%;
    font-weight: bold;
    height: 70px;
    flex-grow: 1;
  }
  p {
    width: 15%;
    flex-grow: 1;
    font-weight: bold;
    box-shadow: 0px 7px 8px black;
  }
}
</style>
