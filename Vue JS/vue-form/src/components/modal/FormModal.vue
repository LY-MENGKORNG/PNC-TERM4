<template>
    <div class="modal fade"  tabindex="-1" role="dialog" id="" aria-labelledby="" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Register Form</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h6>Name: <span class="text-success"  >{{ name }}</span></h6>
                <h6>Age: <span class="text-success"> {{ age }}</span></h6>
              </div>  
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success">Save changes</button>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormModal',
    props: {
      name: String,
      age: Number
    }
}
</script>
