<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <img class=" m-auto" alt="Vue logo" src="./assets/logo.png">
    <FromValidate />
  </div>
</template>

<script>
import FromValidate from './components/FormValidate.vue';

export default {
  name: 'App',
  components: {
    FromValidate,
  }
}
</script>
