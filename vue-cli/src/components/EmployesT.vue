<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <td>name</td>
          <td>salary</td>
          <td>actions</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(e, i) in employees" :key="i">
          <td>{{ e.name }}</td>
          <td>{{ e.salary }}</td>
          <td>
            <button
              class="btn btn-light"
              @click="($event) => (active = !active)"
            >
              change
            </button>
            <button class="btn btn-danger" @click="deleteEmployee">
              delete
            </button>
            <span>{{ active }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "EmployesT",
  props: {
    emps: {
      type: Array,
      requires: true,
    },
    isActive: {
      type: Boolean,
      requires: true,
    },
  },
  data() {
    return {
      active: this.isActive,
      employees: this.emps,
    };
  },
  methods: {
    deleteEmployee() {
      this.employees.shift();
    },
  },
};
</script>

<style></style>
