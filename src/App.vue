<template>
  <main class="container">
    <div class="my-3 p-3 bg-body rounded shadow-lg">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-10">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Item</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                         v-model=descripcion>
                  <div id="emailHelp" class="form-text">Add item</div>
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent="addItem">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="my-3 p-3 bg-body rounded shadow-lg">
      <h6 class="border-bottom pb-2 mb-0">Recent updates</h6>
      <div class="d-flex text-muted pt-3" v-for="item in items" v-bind:key="item.id">
        <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
          <rect width="100%" height="100%" fill="#007bff"/>
          <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
        </svg>

        <p class="pb-3 mb-0 small lh-sm border-bottom">
          <strong class="d-block text-gray-dark">{{ item.user }}</strong>
          {{ item.descripcion }}
        </p>
      </div>
    </div>

    <Empty></Empty>
  </main>
</template>
<script>
import Empty from "./components/Empty";

export default {
  name:       "App",
  data:       function () {
    return {
      descripcion: "",
      items:       [
        {
          id:          1,
          descripcion: "Some representative placeholder content, with some information about this user. Imagine this being some sort of status update, perhaps?",
          user:        "@user1"
        },
        {
          id:          2,
          descripcion: "Some more representative placeholder content, related to this other user. Another status update, perhaps.",
          user:        "@user2"
        },
        {
          id:          3,
          descripcion: "This user also gets some representative placeholder content. Maybe they did something interesting, and you really want to highlight this in the recent updates.",
          user:        "@user3"
        }
      ]
    }
  },
  methods:    {
    addItem: function () {
      this.items.push({
        id:          this.items.length,
        descripcion: `${this.descripcion} ${this.items.length}`,
        user:        "@user1"
      });

      this.descripcion = "";
    }
  },
  components: {
    Empty
  }
}
</script>