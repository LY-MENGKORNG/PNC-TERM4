<template>
  <RegisterFrom />
</template>

<script>
import RegisterFrom from './components/RegisterFrom.vue'

export default {
  name: 'App',
  data() {
    return {
      forms: [
        {id: 1, name: "firstName", type: "text", label: "fName" },
        {id: 2, name: "lastName", type: "text", label: "lName" },
        {id: 3, name: "gender", type: "text", label: "gender" },
        {id: 4, name: "age", type: "number", label: "age" },
      ]
    }
  },
  components: {
    RegisterFrom,
  }
}
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
