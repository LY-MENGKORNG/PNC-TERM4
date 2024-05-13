<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="px-5 pt-3">
    <CustomerList />
  </div>
  <hr>
  <div class="px-5">
    <div class="d-flex">
      <ConditionForm />
      <hr>
      <ComputedForm />
      <hr>
      <MethodForm />
    </div>
  </div>
</template>

<script>
import CustomerList from './components/CustomerList.vue';
import ConditionForm from './components/ConditionForm.vue';
import ComputedForm from './components/ComputedForm.vue';
import MethodForm from './components/MethodForm.vue';

export default {
  name: 'App',
  components: {
    CustomerList,
    ConditionForm,
    ComputedForm,
    MethodForm
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
  margin-top: 10px;
}
</style>
