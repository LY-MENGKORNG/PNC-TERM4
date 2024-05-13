<template>
    <div class="w-[400px] m-auto border rounded-md p-4">
        <h1 class="font-bold text-2xl">Calculator</h1>
        <input type="text" disabled class="border rounded-sm mt-3 w-full text-end px-3 py-1"  v-model="inputField">
        <div class="grid grid-cols-3 gap-2 mt-5">
            <input v-for="item in calculator" :key="item.num" type="button" class="border py-2
             bg-slate-900 rounded-sm active:bg-slate-800 transition-colors cursor-pointer" :value="item.num" @click="changeInputField(item.value)" >
            <input type="button" value="=" class="border py-2 bg-slate-900 rounded-sm active:bg-slate-800 transition-colors cursor-pointer" >
            <input type="button" value="C" class="border py-2 bg-slate-900 rounded-sm active:bg-slate-800 transition-colors cursor-pointer" @click="reset">
            <input type="button" value="+" class="border py-2 bg-slate-900 rounded-sm active:bg-slate-800 transition-colors cursor-pointer" @click="changeInputField('+')">
        </div>
    </div>
</template>

<script>
    export default {
        name: "TodoList",
        data() {
            return {
                calculator: [
                    {num: "1", value: 1},
                    {num: "2", value: 2},
                    {num: "3", value: 3},
                    {num: "4", value: 4},
                    {num: "5", value: 5},
                    {num: "6", value: 6},
                    {num: "7", value: 7},
                    {num: "8", value: 8},
                    {num: "9", value: 9},
                    {num: "0", value: 0},
                ],
                num1: "",
                num2: "",
                inputField: "0",
                result: "0",
            }
        },
        methods: {
            changeInputField(num) {
                this.inputField += num
            },
            reset(){
                this.result = "0";
                this.inputField = "0";
            },
            increase() {
            },
        },
    }
</script>
