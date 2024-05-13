<template>
    <div class="d-flex flex-column">
        <h3>Condition (V-if)</h3>
        <span v-if="isTrue">{{ text }}</span>
    </div>
</template>

<script>
export default {
    name: 'ConditionForm',
    data() {
        return {
            text: "Welcome to Vue JS!",
            isTrue: true,
        }
    },
}
</script>
