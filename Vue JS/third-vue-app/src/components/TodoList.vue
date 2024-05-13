<template>
    <div class="bg-slate-900 text-white p-5 px-20">
        <form class="rounded-md p-5">
            <h1 class="text-2xl font-bold ">Todo List</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet qui possimus quasi quo alias esse facere dignissimos amet cum assumenda nulla nostrum obcaecati autem, tempora quam praesentium quae aliquam.</p>
            <input type="text" class="px-2 py-1 bg-inherit rounded-sm border-2 outline-none mt-5 w-[50%]" placeholder="Todo list" v-model="title">
            <button type="button" class="px-3 py-1 rounded-sm mx-1 bg-sky-400 active:bg-sky-500" @click="addTask()">Create List</button> <br>
            <input type="checkbox" id="check" v-model="priority"> <label for="check">Important</label>
        </form>
    </div>
    <div class="px-24">
        <h1 class="text-2xl font-bold mt-3">
            Lists
        </h1>
        <ul class="mt-3 ">
            <li :key="task.id" v-for="task in tasks" class="flex  justify-between border px-2 py-3 w-[50%] mb-2 text-slate-600 rounded-md">
                <span>{{ task.title }}</span>
                <button class="px-3 py-2 text-slate-700 rounded-md bg-teal-300 active:bg-teal-400">Edit</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    data() {
        return {
            tasks: [
                {id: 1, title: "Hunni ha! nham phak lov ot?😋", priority: false},
                {id: 2, title: "Hunni ha! nham phak lov ot?😋", priority: true},
                {id: 3, title: "Hunni ha! nham phak lov ot?😋", priority: false}
            ],
            title: "",
            priority: false,
        }
    },
    methods: {
        addTask() {
            if (this.title == "") return;
            this.tasks.push({id: this.tasks.length + 1, title: this.title, priority: this.priority}) 
            return this.priority = "";
        }
    }
}
</script>
