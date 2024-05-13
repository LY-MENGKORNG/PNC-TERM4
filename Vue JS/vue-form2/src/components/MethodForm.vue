<template>
    <div class="d-flex flex-column">
        <h3>Method</h3>
        <p :style="isOpen ? {visibility: 'hidden'} : {visibility: ''} " >Hello world</p>
        <button type="button" @click="toggleText" class="btn btn-primary" >Toggle message</button>
    </div>
</template>

<script>
export default {
    name: 'MethodForm',
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggleText() {
            this.isOpen = !this.isOpen
        }
    },
}
</script>
