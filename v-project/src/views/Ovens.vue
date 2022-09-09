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
                  :to="{ name: 'Description', params: { name: 'Bosch Oven' } }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header bos-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      Bosch
                    </h4>
                    <div class="price">
                      180.0$
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
                    params: { name: 'Siemens Oven' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header si-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      Siemens
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
                  :to="{ name: 'Description', params: { name: 'Smeg Oven' } }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header sm-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      Smeg
                    </h4>
                    <div class="price">
                      150.15$
                    </div>
                    <div class="rate">
                      <b-form-rating
                        id="rating-sm-no-border"
                        v-model="value"
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
                  :to="{ name: 'Description', params: { name: 'Neff Oven' } }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header ne-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      Neff
                    </h4>
                    <div class="price">
                      140.10$
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
                    params: { name: 'Zanussi Oven' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header za-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      Zanussi
                    </h4>
                    <div class="price">
                      250.50$
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
                  :to="{ name: 'Description', params: { name: 'Aeg Oven' } }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header ae-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      Aeg
                    </h4>
                    <div class="price">
                      200.14$
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
                    params: { name: 'Whirlpool Oven' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header wh-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      Whirlpool
                    </h4>
                    <div class="price">
                      100.0$
                    </div>
                    <div class="rate">
                      <b-form-rating
                        id="rating-sm-no-border"
                        v-model="value"
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
                    params: { name: 'Hotpoint Oven' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header hoo-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">
                      Hotpoint
                    </h4>
                    <div class="price">
                      170.15$
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
        </div>

        <!--end categories section-->
      </body>
    </html>
  </div>
</template>

<script>
export default {
  name: "Home",
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
