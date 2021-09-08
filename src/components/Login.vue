<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <div class="card rounded shadow">
                    <div class="card-header">
                        <h1>Login</h1>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="auth()">
                            <div class="mb-3">
                                <label for="name" class="form-lable">Email</label>
                                <input type="text" class="form-control" v-model="data.email">
                            </div>
                            <div class="mb-3">
                                <label for="username" class="form-lable">Password</label>
                                <input type="password" class="form-control" v-model="data.password">
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

import { computed } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";

export default {
    setup() {
        const store = useStore();
        const data = ref({});
        const update = ref(false);

        function auth() {
            store.dispatch("auth", data.value);
        }

        return {
            data,
            auth
        }
    }
}
</script>

<style>

</style>