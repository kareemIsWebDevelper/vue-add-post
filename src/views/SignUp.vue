<template>
    <div method="POST" @submit="onSubmit()" action="/" class="container justify-cotnent-center">
        <form class="custom-form">
            <div class="form-group">
                <input class="form-control" type="text" v-model="firstname">
                <input class="form-control" type="text" v-model="lastname">
            </div>
            <button class="btn btn-outline-info" type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
           return {
            firstname: '',
            lastname: '',
           }
        },
        methods: {
        onSubmit() {
            if(this.firstname==='' || this.lastname==='') {
                alert("Fields cannot be blank!")
            }
        }
    }
    }
   
</script>