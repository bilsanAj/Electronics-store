<template>
  <div class="home">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />

        <title>High Life</title>
      </head>
      <body>
        <!--start navbar -->
        <!--start title-->
        <div>
          <b-navbar toggleable="lg" type variant>
            <div class="site-title">
              <h1>High Life</h1>
              <p>Make Your Life Better</p>
            </div>
            <!--end title-->
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-form>
               
                  <b-navbar-brand class="nav-items" href="#"
                    > <router-link class="hom-nav cat-link" to="/">Home</router-link></b-navbar-brand
                  >
                </b-nav-form>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
        <!--end navbar -->

        <!--start categories section-->
        <div class="row categories">
          <div class="column">
            <div class="">
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{
                    name: 'Description',
                    params: { name: 'Haier Freezer' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header ha-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      Haier
                    </h4>
                    <div class="price">
                      320.0$
                    </div>
                    <div class="rate">
                      <b-form-rating
                        id="rating-sm-no-border"
                        v-model="value[2]"
                        no-border
                        size="sm"
                        variant="warning"
                        class="rate mb-2"
                      ></b-form-rating>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="">
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{
                    name: 'Description',
                    params: { name: 'Hisense Freezer' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header hi-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      Hisense
                    </h4>
                    <div class="price">
                      260.0$
                    </div>
                    <div class="rate">
                      <b-form-rating
                        id="rating-sm-no-border"
                        v-model="value[0]"
                        no-border
                        size="sm"
                        variant="warning"
                        class="rate mb-2"
                      ></b-form-rating>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="">
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{
                    name: 'Description',
                    params: { name: 'Hoover Freezer' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header ho-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      Hoover
                    </h4>
                    <div class="price">
                      280.15$
                    </div>
                    <div class="rate">
                      <b-form-rating
                        id="rating-sm-no-border"
                        v-model="value[1]"
                        no-border
                        size="sm"
                        variant="warning"
                        class="rate mb-2"
                      ></b-form-rating>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="">
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{
                    name: 'Description',
                    params: { name: 'Hotpoint Freezer' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header hot-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      Hotpoint
                    </h4>
                    <div class="price">
                      240.10$
                    </div>
                    <div class="rate">
                      <b-form-rating
                        id="rating-sm-no-border"
                        v-model="value[0]"
                        no-border
                        size="sm"
                        variant="warning"
                        class="rate mb-2"
                      ></b-form-rating>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="">
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{
                    name: 'Description',
                    params: { name: 'Bosch Freezer' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header bo-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      Bosch
                    </h4>
                    <div class="price">
                      350.50$
                    </div>
                    <div class="rate">
                      <b-form-rating
                        id="rating-sm-no-border"
                        v-model="value[3]"
                        no-border
                        size="sm"
                        variant="warning"
                        class="rate mb-2"
                      ></b-form-rating>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="">
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{
                    name: 'Description',
                    params: { name: 'Samsung Freezer' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header sa-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      Samsung
                    </h4>
                    <div class="price">
                      300.14$
                    </div>
                    <div class="rate">
                      <b-form-rating
                        id="rating-sm-no-border"
                        v-model="value[3]"
                        no-border
                        size="sm"
                        variant="warning"
                        class="rate mb-2"
                      ></b-form-rating>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="">
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{
                    name: 'Description',
                    params: { name: 'Beko Freezer' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header be-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      Beko
                    </h4>
                    <div class="price">
                      200.0$
                    </div>
                    <div class="rate">
                      <b-form-rating
                        id="rating-sm-no-border"
                        v-model="value[2]"
                        no-border
                        size="sm"
                        variant="warning"
                        class="rate mb-2"
                      ></b-form-rating>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="">
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{ name: 'Description', params: { name: 'LG Freezer' } }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header lg-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      LG
                    </h4>
                    <div class="price">
                      370.15$
                    </div>
                    <div class="rate">
                      <b-form-rating
                        id="rating-sm-no-border"
                        v-model="value[3]"
                        no-border
                        size="sm"
                        variant="warning"
                        class="rate mb-2"
                      ></b-form-rating>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!--end categories section-->
      </body>
    </html>
  </div>
</template>

<script>
export default {
  name: "Freezer",
  data() {
    return {
      value: [3.7, 4, 4.7, 5]
    };
  },
  methods: {
    say: function(msg) {
      localStorage.setItem("storename", msg);
    }
  }
};
</script>
<style lang="scss">

</style>
