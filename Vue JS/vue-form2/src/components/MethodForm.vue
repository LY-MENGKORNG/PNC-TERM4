<template>
    <div class="d-flex flex-column">
        <h3>Method</h3>
        <p>{{ message }}</p>
        <button type="button" @click="toggleText" class="btn btn-primary" >Toggle message</button>
    </div>
</template>

<script>
export default {
    name: 'MethodForm',
    data() {
        return {
            message: ""
        }
    },
    methods: {
        toggleText() {
            let text = this.message;
            text == "" ? text = "Hello world" : text = ""
            this.message = text
        }
    },
}
</script>
