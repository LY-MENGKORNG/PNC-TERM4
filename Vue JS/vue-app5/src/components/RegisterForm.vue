<template>
<form class="w-[900px] mx-auto">
    <div class="flex items-start">
      <div class="flex-2">
        <h2 class="text-2xl font-semibold">Register</h2>
        <div v-for="form in froms" :key="form.id" class="flex flex-col items-start">
          <label :for="form.label">{{form.name}}</label>
          <input :type="form.type" :id="form.label" class="border active:outline-2 px-2 rounded-sm">
        </div>
      </div>
      <div class="flex-1"></div>
    </div>
  </form>
</template>

<script>
export default {
    name: 'RegisterFrom'
}
</script>
