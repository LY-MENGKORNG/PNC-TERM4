<template>
  <div class="xl:w-[800px] lg:w-[750px] md:w-[700px] sm:w-[500px] mx-auto mt-5">
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
    FruitList,
    StudentList
  }
}
</script>

