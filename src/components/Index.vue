<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{name: 'home.create'}" class="btn btn-primary rounded shadow mb-3">Create</router-link>
                <div class="card rounded shadow">
                    <div class="card-header">
                        <h1>List</h1>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(data, i) in data" :key="i">
                                    <td>{{data.name}}</td>
                                    <td>{{data.username}}</td>
                                    <td>{{data.email}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <router-link :to="{name: 'home.edit', params:{id: data.id}}" class="btn btn-warning btn-sm">Edit</router-link>
                                            <button class="btn btn-danger btn-sm" @click.prevent="destroy(data.id, index)">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {onMounted, ref} from 'vue';

export default {
    setup() {
        let data = ref([]);

        onMounted(() => {
            //get data
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((result) => {
                data.value = result.data;
            }).catch((err) => {
                console.log(err);
            })
        });

        function destroy(id, index){
            axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(() => {
                data.value.splice(index, 1)
            }).catch((err) => {
                console.log(err);
            })
        }

        return {
            data,
            destroy
        }
    }
}
</script>

<style>

</style>