<template>
    <form class="d-flex flex-column col-4 m-auto row">
        <div class="col-12">
            <input type="text" class="form-control" placeholder="Your name" v-model="name">
            <p class="text-danger pb-2">{{ nameValidate }}</p>
        </div>
        <div class="col-12">
            <input type="number" class="form-control" placeholder="Your age" v-model="age">
            <p class="text-danger pb-2">{{ ageValidate }}</p>
        </div>
        <div class="col-12">
            <input type="password" class="form-control" placeholder="Your password" v-model="password">
            <p class="text-danger pb-2">{{ passwordValidate }}</p>
        </div>
        <div class="col-12">
            <button type="button" class="btn btn-success col-12" data-bs-toggle="modal" :data-bs-target="'#'+target" >Submit</button>
        </div>
    </form>
    <FormModal :aria-labelledby="target+ 'Example'" :id="target" :name="name" :age="age" />
</template>

<script>
import FormModal from "./modal/FormModal.vue";
export default {
    name: 'FromValidate',
    components: {
        FormModal,
    },
    data() {
        return {
            name: '',
            age: '',
            password: '',
            nameValidate: '',
            ageValidate: '',
            passwordValidate: '',
            target: "validate"
        }
    },
    watch: {
        name(name) {
            this.nameValidate = name.length < 4 || name.length > 20 ? "Your name must be at least 4 and less than 20 characters" : ""
        },
        age(age) { 
            this.ageValidate = age <= 0 || age >= 200 ? "Your age must be positive, greater than 0 and less than 200" : ""
        },
        password(password) { 
            this.passwordValidate = password.length < 8 || password.length >= 50 ? "Your password must be contain more than 8 and less than 50 characters" : ""
        }
    }
}
</script>
