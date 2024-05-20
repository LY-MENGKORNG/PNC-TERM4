<template>
    <div class="card col-4 mx-auto mt-5" >
        <div class="card-header p-3">
            <h3>User Information</h3>
        </div>
        <div class="card-body p-3">
            <div class="form-group">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" class="form-control px-2" placeholder="Your name" v-model="name" >
            </div>
            <div class="form-group mt-3">
                <label for="age" class="form-label" >Age</label>
                <input type="number" min="0" id="age" class="form-control px-2" placeholder="Your age" v-model="age" >
            </div>
        </div>
        <div class="card-footer">
            <h3>Entered Information</h3>
            <span>Name: <span :class="'text-' +getStatus.style"> {{ name }}</span></span><br>
            <span>Age: <span :class="'text-' +getStatus.style">{{ age }}</span></span><br><br>
            <span>Status: <span :class="'text-' +getStatus.style" >{{ getStatus.status }}</span></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserInfo',
        data() {
            return {
                name: '',
                age: 0,
            }
        },
        computed: {
            getStatus() {
                return this.age < 18 ? { status: "Child", style: 'warning' } : this.age > 40 ?  { status: "Old", style: "danger" } : { status: "Adult", style: "success" }
            }
        }
    }
</script>
