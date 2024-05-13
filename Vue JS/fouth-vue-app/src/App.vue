<template>
  <div class="h-[100vh] flex bg-black text-white">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList,
  },
  computed: {
    displayMessage() {
      return "Hello World";
    },
  },
  data() {
    return {
      fruits: ["Apple", "Banana", "Orange", "Mango", "Grapes"],
      profile: {
        name: "Jonh",
        age: 31,
        degree: "Master",
        position: "Full Stack Developer"
      }
    }
  },
}
</script>

