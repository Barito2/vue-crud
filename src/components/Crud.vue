<template>
  <div class="mt-4 container">
    <div class="row">
      <div class="col-4">
        <form>
          <h4>Create Data</h4>

          <div class="form-group">
            <label for="name">Name</label>
              <input
                v-model="book.name"
                type="text"
                class="form-control"
                placeholder="Title"
              />
          </div>
          <div class="form-group">
            <label for="username">Username</label>
              <input
                v-model="book.username"
                type="text"
                class="form-control"
                placeholder="Username"
              />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
              <input
                v-model="book.email"
                type="text"
                class="form-control"
                placeholder="Email"
              />
          </div>

          <button
            v-if="!update"
            type="button"
            class="btn btn-success mt-2"
            @click="addBook()"
          >
            Add
          </button>
          <button
            v-if="update"
            type="button"
            class="btn btn-success mt-2"
            @click="updateBook()"
          >
            Update
          </button>
        </form>
      </div>

      <div class="col-8">
        <div class="row">
            <div class="card">
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
                                <tr v-for="book in books" :key="book">
                                    <td>{{book.name}}</td>
                                    <td>{{book.username}}</td>
                                    <td>{{book.email}}</td>
                                    <td>
                                        <div class="btn-group">
                                          <button @click=" update = true; tmpBook = book; this.book = tmpBook;" class="btn btn-primary mr-2"> Update </button>
                                          <button @click="deleteBook(book)" class="btn btn-danger md-6"> Delete </button>
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
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  name: "Crud",

  setup() {
    const store = useStore();
    const book = ref({});
    const update = ref(false);
    const tmpBook = ref({});

    function addBook() {
      store.dispatch("addBook", book.value);
    }

    function updateBook() {
      store.dispatch("updateBook", book.value);
    }

    function deleteBook(book) {
      store.dispatch("deleteBook", book);
    }

    return {
      book,
      books: computed(() => store.getters.getAllBooks),
      addBook,
      deleteBook,
      updateBook,
      update,
      tmpBook,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>