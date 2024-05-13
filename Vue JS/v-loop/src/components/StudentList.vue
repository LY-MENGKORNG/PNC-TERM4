<template>
    <h1 class="font-bold text-2xl">Student List</h1>
    <table class="w-full mt-2">
        <thead>
            <tr>
                <th class="border ">Name</th>
                <th class="border ">Age</th>
                <th class="border ">Gender</th>
                <th class="border ">Profile</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in students" :key="student.id">
                <td class="border pl-3" >{{ student.name }}</td>
                <td class="border pl-3" >{{ student.age }}</td>
                <td class="border pl-3" >{{ student.gender }}</td>
                <td class="border pl-3" >
                    <img class="h-10 w-10 border mx-auto rounded-[50%]" :src="student.profile" alt="">
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import profile3 from '../assets/profile3.jpg';

export default {
    name: "StudentList",
    data() {
        return {
            students: [
                {id: 1, name: "Jonh", age: 19, gender: "male", profile: profile1},
                {id: 2, name: "Ammi", age: 19, gender: "male", profile: profile2},
                {id: 3, name: "Annie", age: 19, gender: "male", profile: profile3}
            ]
        }
    },
}
</script>
