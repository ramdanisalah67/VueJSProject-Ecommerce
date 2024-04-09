<template>
  <div>welcome to card page</div>
  <div class="">
    <p>Add Card</p>
    <div class="container">
      <p>title<input type="text" v-model="myCard.title" /></p>
      <p>content<input type="text" v-model="myCard.content" /></p>
      <div>
        <p>FavoriteSport</p>
        tenis<input type="checkbox" v-model="favoriteSport.tenis" />
        <p>{{ favoriteSport.tenis }}</p>
        football<input type="checkbox" v-model="favoriteSport.football" />
        <p>{{ favoriteSport.football }}</p>
      </div>

      <div>
        <p>Gender</p>
        <p>
          male<input type="radio" value="male" name="" id="" v-model="Gender" />
        </p>
        <p>
          female<input
            type="radio"
            value="female"
            name=""
            id=""
            v-model="Gender"
          />
        </p>
      </div>
      <p><button class="btn btn-success" @click="addCard()">add</button></p>
    </div>
  </div>
  <div class="card-parent container">
    <div class="my-card" v-for="f in cards" :key="f">
      <div class="title">
        <h2>{{ f.title }}</h2>
      </div>
      <div class="content">{{ f.content }}</div>
      <div class="button">Read More</div>
    </div>
  </div>
</template>

<!--class-->

<script>
export default {
  data() {
    return {
      favoriteSport: {
        tenis: false,
        football: false,
      },
      Gender: "",
      cards: [],
      myCard: {
        title: "",
        content: "",
      },
    };
  },
  beforeCreate() {
    console.log("create");
  },
  methods: {
    addCard() {
      console.log("add Card");
      console.log(this.favoriteSport);
      console.log("Gender is " + this.Gender);
      this.cards.push(this.myCard);
      console.log(this.cards);
      this.myCard = {};
    },
  },
};
</script>

<!--Style-->
<style lang="scss">
.card-parent {
  height: 300px;
  background-color: antiquewhite;
  display: flex;
  flex-wrap: wrap;
  .my-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    width: 22%;
    align-items: center;
    border: 2px solid brown;
  }
}
</style>
