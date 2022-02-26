<template>
  <main class="container">

    <div class="row justify-content-lg-between align-items-lg-center">


      <div class="col-lg-12">
        <div class="card-header bg-primary text-white text-center py-4 px-5 px-md-6">
          <h4 class="text-white mb-0">Try it free for 7 days starting at $59</h4>
        </div>

        <div class="card-body p-md-6">
          <div class="row">
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
          <div class="row">
            <div class="my-3 p-3 bg-body rounded ">
              <h6 class="border-bottom pb-2 mb-5">Recent updates</h6>
              <div class="col-sm-10 col-lg-10 mb-5" v-for="item in items" v-bind:key="item.id">
                <div class="card card-bordered card-hover-shadow h-100">
                  <div class="card-body">
                    <div class="row mb-3">
                      <div class="col">
                        <div class="media align-items-center">
                          <img class="avatar avatar-sm mr-3" src="./assets/front/svg/brands/mailchimp.svg"
                               alt="Image Description">
                          <div class="media-body">
                            <h6 class="mb-0">
                              <a class="text-dark" href="employer.html">{{ item.user }}</a>
                              <img class="avatar avatar-xss ml-1" src="./assets/front/svg/illustrations/top-vendor.svg"
                                   alt="Review rating" data-toggle="tooltip" data-placement="top" title=""
                                   data-original-title="Claimed profile">
                            </h6>
                          </div>
                        </div>
                      </div>

                      <div class="col-auto">
                        <!-- Checkbbox Bookmark -->
                        <div class="custom-control custom-checkbox-bookmark">
                          <input type="checkbox" id="checkboxBookmark1"
                                 class="custom-control-input custom-checkbox-bookmark-input">
                          <label class="custom-checkbox-bookmark-label" for="checkboxBookmark1">
                        <span class="custom-checkbox-bookmark-default" data-toggle="tooltip" data-placement="top"
                              title="" data-original-title="Save this job">
                          <i class="far fa-star"></i>
                        </span>
                            <span class="custom-checkbox-bookmark-active" data-toggle="tooltip" data-placement="top"
                                  title="" data-original-title="Saved">
                          <i class="fas fa-star"></i>
                        </span>
                          </label>
                        </div>
                        <!-- End Checkbbox Bookmark -->
                      </div>
                    </div>
                    <!-- End Row -->

                    <h3 class="mb-3">
                      <a class="text-dark" href="employer.html">{{ item.descripcion }}</a>
                    </h3>

                    <span class="d-block font-size-1 text-body mb-1">$125k-$135k yearly</span>

                    <span class="badge badge-soft-info mr-2">
                  <span class="legend-indicator bg-info"></span>Remote
                </span>
                  </div>
                  <div class="card-footer">
                    <ul class="list-inline list-separator small text-body">
                      <li class="list-inline-item">Posted 7 hours ago</li>
                      <li class="list-inline-item">Oxford</li>
                      <li class="list-inline-item">Full time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button @click="add()">Add</button>

    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-link to="/empty">Go to empty</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    routes
    <router-view>routes</router-view>
    ---routes

  </main>
</template>
<script>

export default {
  name:       "App",
  data:       function () {
    return {
      descripcion: "",
    }
  },
  computed:   {
    items() {
      return this.$store.state.items;
    },
  },
  methods:    {
    add() {
      this.$store.dispatch('addIAction', {
        id:          this.$store.state.items.length + 1,
        descripcion: this.descripcion,
        user:        "@user9"
      })
    },
  },
}
</script>
