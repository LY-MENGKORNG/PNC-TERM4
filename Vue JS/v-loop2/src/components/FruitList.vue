<template>
    <div class="mt-3" >
        <h2 class="font-bold text-xl" >Fruit List</h2>
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 mt-2">
            <div class="" v-for="fruit in fruits" :key="fruit.id">
                <img :src="fruit.picture" alt="">
                <h3 class="font-medium" >{{ fruit.name }}</h3>
                <h3 class="font-light" >{{ fruit.description }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import banana from '../assets/banana.jpg';
import orange from '../assets/orange.jpg';
import apple from '../assets/apple.jpg';
import stowbery from '../assets/stowbery.jpg';

export default {
    name: 'FruitList',
    data() {
        return {
            fruits: [
                {id: 1, name: "Banana", picture: banana, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, perferendis."},
                {id: 1, name: "Orange", picture: orange, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, perferendis."},
                {id: 1, name: "Apple", picture: apple, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, perferendis."},
                {id: 1, name: "stowbery", picture: stowbery, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, perferendis."},
            ]
        }
    },
}
</script>