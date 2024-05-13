<template>
  <div class="w-[800px] mx-auto mt-3">
    <StudentList />
    <FruitList />
  </div>
</template>

<script>
import StudentList from './components/StudentList.vue';
import FruitList from './components/FruitList.vue';

export default {
  name: 'App',
  components: {
    StudentList,
    FruitList
  }
}
</script>

