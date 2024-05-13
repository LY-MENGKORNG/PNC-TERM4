<template>
    <div class="">
        <h2 class="font-bold text-xl">Student list</h2>
        <table class="w-full mt-2">
            <thead>
                <tr>
                    <th class="border py-2">name</th>
                    <th class="border py-2">age</th>
                    <th class="border py-2">gender</th>
                    <th class="border py-2">profile</th>
                </tr>   
            </thead>
            <tbody>
                <tr v-for="student in students" :key="student.id">
                    <td class="border px-2">{{ student.name }}</td>
                    <td class="border px-2">{{ student.age }}</td>
                    <td class="border px-2">{{ student.gender }}</td>
                    <td class="border px-2">
                        <img :src="student.profile" class="w-10 h10 rounded-[50%]" alt="">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import profile1 from '../assets/profile1.jpg'
import profile2 from '../assets/profile2.jpg'
import profile3 from '../assets/profile3.jpg'
export default {
    name: 'StudentList',
    data() {
        return {
            students: [
                {id: 1, name: "Jonh", age: 19, gender: "male", profile: profile1},
                {id: 2, name: "Ammi", age: 19, gender: "male", profile: profile2},
                {id: 3, name: "Annie", age: 19, gender: "female", profile: profile3}
            ]
        }
    },
}
</script>