<template>
    <div class="col-4 mx-auto row p-0 m-0 card mt-5">
        <h2 class="text-success" >Password Validation</h2>
        <div class="card-body">
            <input :type="passwordCheck ? 'text' : 'password'" class="form-control" placeholder="password" v-model="password" >
            <div class="p-0 m-0">
                <input type="checkbox" class="form-check-input" v-model="passwordCheck" id="check" ><label for="check" class="form-check-label mx-2 text-success" >Check</label>
            </div>
            <input type="password" class="form-control mt-3" placeholder="confirm password" v-model="confirmPassword" >
            <p  class="text-danger">{{ alertMessage }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConfirmingPassword',
    data() {
        return {
            alertMessage: '',
            password: '',
            confirmPassword: '',
            passwordCheck: false
        }
    },
    watch: {
        confirmPassword() {
            this.alertMessage = this.password == this.confirmPassword ? '' : 'Invalid password!'
        }
    },
}   
</script>