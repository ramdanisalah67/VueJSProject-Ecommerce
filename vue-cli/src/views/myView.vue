<template>
  <div>
    <span>welcome {{ username }} to home page</span>
    <keep-alive>
      <LifeCycle v-if="process == 'login'">
        <template #slote1>
          <div>
            <p>Login</p>
            Student Name<input type="text" />
            <button>save</button>
          </div>

          <div>
            Student password<input type="password" />
            <button>save</button>
          </div>
        </template>
      </LifeCycle>
    </keep-alive>
    <keep-alive>
      <LifeCycle v-if="process == 'register'">
        <template #slote2>
          <div>
            <p>register</p>
            fullName<input type="text" /> email <input type="email" /> password
            <input type="password" />
            <button>save</button>
          </div>
        </template>
      </LifeCycle>
    </keep-alive>

    <button @click="change()">{{ text }}</button>
  </div>
</template>

<script>
import LifeCycle from "@/components/LifeCycle.vue";
export default {
  data() {
    return {
      username: "salah-eddine",
      process: "login",
      text: "register",
    };
  },
  methods: {
    change() {
      if (this.process == "login") {
        this.process = "register";
        this.text = "login";
      } else {
        this.process = "login";
        this.text = "register";
      }
    },
  },
  components: {
    LifeCycle,
  },
};
</script>
