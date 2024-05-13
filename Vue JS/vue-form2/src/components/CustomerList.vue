<template>
    <h2>Customer List (V-for)</h2>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Profile</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="customer in customers" :key="customer.id">
                <td>{{ customer.id }}</td>
                <td>{{ customer.name }}</td>
                <td>{{ customer.age }}</td>
                <td>{{ customer.gender }}</td>
                <td>
                    <img class="rounded-circle" style="width: 40px; height: 40px;" :src="customer.profile">
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'CustomerList',
    data() {
        return {
            customers: [
                {id: 1, name: 'Bopha', age: 20, gender: 'female', profile: 'https://images.pexels.com/photos/21972309/pexels-photo-21972309/free-photo-of-a-girl-with-red-hair-and-a-guitar-sitting-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'},
                {id: 2, name: 'Jonh', age: 25, gender: 'male', profile: 'https://images.pexels.com/photos/20068318/pexels-photo-20068318/free-photo-of-man-wearing-brown-jacket-in-a-narrow-alley.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'},
                {id: 3, name: 'Ammie', age: 19, gender: 'female', profile: 'https://images.pexels.com/photos/22690392/pexels-photo-22690392/free-photo-of-woman-drinking-coffee-in-train.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'},
            ]
        }
    },
}
</script>
