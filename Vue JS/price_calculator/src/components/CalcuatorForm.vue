<template>
    <div class="card col-4 mx-auto mt-5">
        <div class="card-header p-3">
            <h4>Calculator Price</h4>
        </div>
        <div class="card-body p-3">
            <div class="form-group">
                <label for="perItem" class="form-label">Price Per Item</label><br>
                <input id="perItem" type="number" class="form-control px-2 w-100"  min="0" v-model="price" >
            </div>
            <div class="form-group mt-3">
                <label for="qty" class="form-label">Qauntity</label><br>
                <input id="qty" type="number" class="form-control px-2 w-100"  min="0" v-model="qty" >
            </div>
        </div>
        <div class="card-footer">
            <div class="form-group mt-3">
                <label for="total" class="form-label">Total Price</label><br>
                <input id="total" type="number" class="form-control px-2 w-100"  disabled min="0" v-model="calculatePrice" >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CalculatorForm",
    data() {
        return {
            price: 0,
            qty: 0,
            totalPrice: 0,
        }
    },
    computed: {
        calculatePrice() {
            return this.price * this.qty;
        }
    }
}
</script>
