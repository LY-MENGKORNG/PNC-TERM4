<template>
    <div class="d-flex flex-column">
        <h3>Computed</h3>
        <p>{<span>{{ displayText }}</span>}</p>
        <input type="text" v-model="textInput">
    </div>
</template>

<script>
export default {
    name: 'ComputedForm',
    data() {
        return {
            textInput: ''
        }
    },
    computed: {
        displayText() {
            return this.textInput
        }
    }
}
</script>
