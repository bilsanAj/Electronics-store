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
              <h1 id="h">High Life</h1>
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
            <div class>
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{ name: 'Description', params: { name: 'Beko Washer' } }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header bew-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">Beko</h4>
                    <div class="price">180.0$</div>
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
            <div class>
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{ name: 'Description', params: { name: 'Aeg Washer' } }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header aew-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">Aeg</h4>
                    <div class="price">200.0$</div>
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
            <div class>
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{
                    name: 'Description',
                    params: { name: 'Hoover Washer' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header how-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">Hoover</h4>
                    <div class="price">150.15$</div>
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
            <div class>
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{
                    name: 'Description',
                    params: { name: 'Hotpoint Washer' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header hw-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">Hotpoint</h4>
                    <div class="price">140.10$</div>
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
            <div class>
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{
                    name: 'Description',
                    params: { name: 'Indesit Washer' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header inw-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">Indesit</h4>
                    <div class="price">250.50$</div>
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
            <div class>
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{
                    name: 'Description',
                    params: { name: 'Whirlpool Washer' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header whw-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">Whirlpool</h4>
                    <div class="price">200.14$</div>
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
            <div class>
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{
                    name: 'Description',
                    params: { name: 'Bosch Washer' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header bw-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">Bosch</h4>
                    <div class="price">100.0$</div>
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
            <div class>
              <div class="off-div col-xs-12 col-sm-4">
                <router-link
                  :to="{
                    name: 'Description',
                    params: { name: 'Baumatic Washer' }
                  }"
                >
                  <div class="price-box price-boxh">
                    <div class="price-header baw-header"></div>

                    <div class="price-rate price-rated"></div>
                    <h4 class="name">Baumatic</h4>
                    <div class="price">170.15$</div>
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

