<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{name: 'home.index'}" class="btn btn-primary rounded shadow mb-3">Back</router-link>
                <div class="card rounded shadow">
                    <div class="card-header">
                        <h1>Create Data</h1>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="store()">
                            <div class="mb-3">
                                <label for="name" class="form-lable">Name</label>
                                <input type="text" class="form-control" v-model="data.name">
                            </div>
                            <div class="mb-3">
                                <label for="username" class="form-lable">Username</label>
                                <input type="text" class="form-control" v-model="data.username">
                            </div>
                            <div class="mb-3">
                                <label for="username" class="form-lable">Email</label>
                                <input type="email" class="form-control" v-model="data.email">
                            </div>
                            <button class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {reactive, ref} from 'vue';
import {useRouter} from 'vue-router';
import axios from 'axios';

export default {
    setup() {
        const data = reactive({
            name: '',
            username: '',
            email: '',
        });

        const router = useRouter();

        function store() {
            axios.post('https://jsonplaceholder.typicode.com/users', data)
            .then(() => {
                router.push({name: 'home.index'});
            }).catch((err) => {
                console.log(err);
            })
        }

        return {
            data,
            router,
            store
        }
    }
}
</script>

<style>

</style>