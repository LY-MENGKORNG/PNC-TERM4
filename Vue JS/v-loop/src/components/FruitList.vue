<template>
    <div class="mt-7">
        <h1 class="font-bold text-2xl">Fruit List</h1>
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-2"> 
            <div class="" v-for="fruit in fruits" :key="fruit.id">
                <div class="h-[120px] flex items-center justify-center overflow-hidden">
                    <img :src="fruit.picture" alt="">
                </div>
                <h3 class="font-medium">{{ fruit.name }}</h3>
                <p class="text-justify">{{ fruit.descrition }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import apple from '../assets/apple.jpg';
import banana from '../assets/banana.jpg';
import orange from '../assets/orange.jpg';
import stowbery from '../assets/stowbery.jpg';

export default {
    name: "FruitList",
    data() {
        return {
            fruits: [
                {id: 1, name: "Banana", picture: banana, descrition: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ad?"},
                {id: 2, name: "Orange", picture: orange, descrition: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ad?"},
                {id: 3, name: "Apple", picture: apple, descrition: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ad?"},
                {id: 3, name: "Stowbery", picture: stowbery, descrition: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ad?"},
            ]
        }
    },
}
</script>
