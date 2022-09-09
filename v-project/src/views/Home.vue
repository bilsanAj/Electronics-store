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
        <link rel="stylesheet" href=" ../StyleSheet/Home.css">

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
                    >About</b-navbar-brand
                  >
                  <b-navbar-brand class="nav-items" href="#"
                    > <a href="" class="nav-items" data-toggle="modal" data-target="#modalContactForm">
    Cotact Us</a></b-navbar-brand
                  >
                  <b-navbar-brand class="nav-items" href="#"
                    > <router-link class="cat-link" to="/">Home</router-link></b-navbar-brand
                  >
                 
                </b-nav-form>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
        <!--end navbar -->
        <!--start carousel-->

        <div class="carousel">
          <b-carousel
            id="carousel-1"
          
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
           
          >
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/home3.jpg"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/home10.jpg"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/home31.jpg"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/home121.jpg"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/home101.jpg"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>

            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/home2.jpg"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
          </b-carousel>
        </div>

        <!--end carousel-->
        <!--start offers section-->
        <div class="offers">
          <div class="row">
            <div class="column">
              <div class="off-div col-xs-12 col-sm-4">
                                <router-link  class="route-color"
                  :to="{ name: 'Description', params: { name: 'Bosch Oven' } }"
                >
                <p class="saving">
                  <span>Save 70%</span>
                </p>
                <div class="price-box price-box-ma">
                  <div class="price-header"></div>

                  <div class="price-rate">
                    <h4>Bosch Oven</h4>
                  </div>
                   
                </div>
                </router-link>
              </div>
            </div>

            <div class="column">
              <div class="off-div col-xs-12 col-sm-4">
                                  <router-link  class="route-color"
                  :to="{ name: 'Description', params: { name: 'Samsung Freezer' } }"
                >
                <p class="saving">
                  <span>Save 50%</span>
                </p>
                <div class="price-box price-box-ma">
                  <div class="price-header f-header"></div>

                  <div class="price-rate">
                    <h4>Samsung Freezer</h4>
                  </div>
                </div>
                </router-link>
              </div>
            </div>
            <div class="column">
              <div class="off-div col-xs-12 col-sm-4">
                                  <router-link  class="route-color"
                  :to="{ name: 'Description', params: { name: 'Aeg Washer' } }"
                >
                <p class="saving">
                  <span>Save 75%</span>
                </p>
                <div class="price-box price-box-ma">
                  <div class="price-header fire-header"></div>

                  <div class="price-rate">
                    <h4>
Aeg Washer</h4>
                  </div>
                </div>
                </router-link>
              </div>
            </div>
            <div class="column">
              <div class="off-div col-xs-12 col-sm-4">
                                  <router-link  class="route-color"
                  :to="{ name: 'Description', params: { name: 'Dehumidifiers Conditioner' } }"
                >
                <p class="saving">
                  <span>Save 40%</span>
                </p>
                <div class="price-box price-box-ma">
                  <div class="price-header d-header"></div>

                  <div class="price-rate">
                    <h4>
Dehumidifiers Conditioner</h4>
                  </div>
                </div>
                </router-link>
              </div>
            </div>
          </div>

          <div class="row1">
            <div class="column">
              <div class="off-div col-xs-12 col-sm-4">
                                  <router-link  class="route-color"
                  :to="{ name: 'Description', params: { name: 'Whirlpool Washer' } }"
                >
                <p class="saving">
                  <span>Save 30%</span>
                </p>
                <div class="price-box price-box-ma">
                  <div class="price-header w-header"></div>

                  <div class="price-rate">
                    <h4>Whirlpool Washer</h4>
                  </div>
                </div>
                </router-link>
              </div>
            </div>

            <div class="column">
              <div class="off-div col-xs-12 col-sm-4">
                                  <router-link  class="route-color"
                  :to="{ name: 'Description', params: { name: 'Hoover Freezer' } }"
                >
                <p class="saving">
                  <span>Save 20%</span>
                </p>
                <div class="price-box price-box-ma">
                  <div class="price-header s-header"></div>

                  <div class="price-rate">
                    <h4>Hoover Freezer</h4>
                  </div>
                </div>
                </router-link>
              </div>
            </div>

            <div class="column">
              <div class="off-div col-xs-12 col-sm-4">
                                  <router-link  class="route-color"
                  :to="{ name: 'Description', params: { name: 'Smeg Oven' } }"
                >
                <p class="saving">
                  <span>Save 60%</span>
                </p>
                <div class="price-box price-box-ma">
                  <div class="price-header r-header"></div>

                  <div class="price-rate">
                    <h4>Smeg Oven</h4>
                  </div>
                </div>
                </router-link>
              </div>
            </div>

            <div class="column">
              <div class="off-div col-xs-12 col-sm-4">
                                  <router-link  class="route-color"
                  :to="{ name: 'Description', params: { name: 'De longhi_pacan Conditioner' } }"
                >
                <p class="saving">
                  <span>Save 25%</span>
                </p>

                <div class="price-box price-box-ma">
                  <div class="price-header k-header"></div>

                  <div class="price-rate">
                    <h4>De longhi_pacan Conditioner</h4>
                  </div>
                </div>
                                  </router-link>
              </div>
            </div>
          </div>
        </div>

        <!--end offers section-->
        <!-- start new Addation section-->

        <div class="new-add row">
          <div class="column1">
            <img class="cof-img" src="../assets/coffee.webp" alt srcset />
          </div>
          <div class="column1">
            <div class="des">
              <h3>Mornings made easy</h3>
              <p>
                Who says your kitchen can’t compete with your favourite café?
                <br />Our surprisingly simple coffee makers can create a whole
                menu of barista-approved coffee drinks at the touch of a button.
                <br />Meanwhile, high quality breakfast-prep staples like
                toasters and kettles make it extra easy to start your day right.
              </p>
            </div>
          </div>

          <div class="column1">
            <div class="des1">
              <h3>Master every meal</h3>
              <p>
                Whether you’re a top chef or just the opposite, our ovens,
                cooktops,
                <br />microwaves and accessories make it easy to get perfect
                results at every meal.
                <br />
                <br />
                <br />An array of options help you customize to your precise
                needs, and <br />technology like Home Connect that syncs your
                oven with your phone or <br />tablet gives you even greater
                control. Best of all, our sleek, sophisticated <br />designs
                give any kitchen an instant upgrade.
              </p>
            </div>
          </div>
          <div class="column1">
            <img class="br-img" src="../assets/breakfast.webp" alt srcset />
          </div>
        </div>
        <!-- end new Addation section-->
        <!--start categories section-->
        <!--div class="rate">
  
      <b-form-rating v-model="value" variant="warning" class="rate mb-2"></b-form-rating>
      </div-->
        <div class="cats">
          <router-link class="cat-link" to="/washers">
          <b-button class="cat-but" variant="outline-primary">
            Washers
          </b-button>
          </router-link>
           <router-link class="cat-link" to="/freezer">
          <b-button class="cat-but" variant="outline-primary">
           
              Freezers
              
              
              </b-button
          >
          </router-link>
           <router-link class="cat-link" to="/ovens"
              >
          <b-button class="cat-but" variant="outline-primary">
           Ovens</b-button
          >
          </router-link
            >
             <router-link class="cat-link" to="/conditioners"
              >
          <b-button class="cat-but" variant="outline-primary">
           Conditioners</b-button
          >
          </router-link
            >
        </div>

        <!--end categories section-->



        <!-- start footer section-->
<!-- Footer -->
<footer class="page-footer font-small blue-grey lighten-5">

  <div class="background">
    <div class="container">

      <!-- Grid row-->
      <div class="row py-4 d-flex align-items-center">

        <!-- Grid column -->
        <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 style="font-size:25px;" class="mb-0">Get connected with us on social networks!</h6>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-6 col-lg-7 text-center text-md-right">

          <!-- Facebook -->
          <a class="fb-ic">
            <i class="fa-size fab fa-facebook-f white-text mr-4" style="font-size:30px;"> </i>
          </a>
          <!-- Twitter -->
          <a class="tw-ic">
            <i class="fa-size fab fa-twitter white-text mr-4" style="font-size:30px;"> </i>
          </a>
          <!-- Google +-->
          <a class="gplus-ic">
            <i class=" fa-size fab fa-google-plus-g white-text mr-4" style="font-size:30px;"> </i>
          </a>
          <!--Linkedin -->
          <a class="li-ic">
            <i class="fa-size fab fa-linkedin-in white-text mr-4" style="font-size:30px;"> </i>
          </a>
          <!--Instagram-->
          <a class="ins-ic">
            <i class="fa-size fab fa-instagram white-text" style="font-size:30px;" > </i>
          </a>

        </div>
        <!-- Grid column -->

      </div>
      <!-- Grid row-->

    </div>
  </div>

  <!-- Footer Links -->
  <div class="container text-center text-md-left mt-5">

    <!-- Grid row -->
    <div class="row mt-3 dark-grey-text">

      <!-- Grid column -->

      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Branch</h6>
        <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p>
         Damascuse
        </p>
        <p>
         Lataqqia
        </p>
        <p>
          Homs
        </p>
        <p>
          Tartus
        </p>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Conect Us</h6>
        <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p>
         0112222 333
        </p>
        <p>
         041222 333
        </p>
        <p>
031222 333        </p>
        <p>
      043222 333
        </p>

      </div>
      <!-- Grid column -->
<input type="text" name="" id="" class="std_input">
      <!-- Grid column -->
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Contact</h6>
        <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p>
          <i class="fas fa-home mr-3"></i> Syria , Damascuse, Al Hamra-Street</p>
        <p>
          <i class="fas fa-envelope mr-3"></i> high-life@gmail.com</p>
        <p>
          <i class="fas fa-phone mr-3"></i> + 011 222 2333 </p>
        <p>
          <i class="fas fa-print mr-3"></i> + 011 222 2444</p>

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Links -->

  <!-- Copyright -->
  <div class="footer-copyright text-center text-black-50 py-3">© 2020 Copyright:
    <a class="dark-grey-text" href=""> HighLife.com</a>
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->
<!-- end Footer section -->
<!-- start costumer feedback-->
<div  class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div  class="modal-dialog" role="document">
    <div style="height: 550px;" class="modal-content">
      <div  class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Write to us</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <div class="md-form mb-5">
          <i class="fas fa-user prefix grey-text"></i>
          <input type="text" id="form34" class="input_std" placeholder="Your name">
        </div>

        <div class="md-form mb-5">
          <i class="fas fa-envelope prefix grey-text"></i>
          <input type="email" id="form29" class="input_std" placeholder="Your email">
        </div>

        

        <div class="md-form">
          <i class="fas fa-comment-dots"></i>
          <textarea type="text" id="form8" class="input_std" rows="4" placeholder="Your message"></textarea>
        </div>

      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="login100-form-btn">Send </button>
      </div>
    </div>
  </div>
</div>


 
<!-- end costumer feedback-->

      </body>
    </html>
  </div>
</template>

<script>

//import axios from "axios";
import axios from 'axios';
import {mapState} from 'vuex';
export default {
  
  name: "Home",
  data(){
    return {
      myData :[{
        name : '',
        rate : '',
      }]
    }
  },
  computed: mapState(['APIData']),

   methods: {
    LoadHomeData(){
          const response =  axios.get('http://127.0.0.1:8000/products/')
      // if (!this.FacilityDetails)
      // this.FacilityDetails = response.data
      console.log('response')
      console.log(response)
    //     getAPI.get('/getProducts/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } })
    //       .then(response => {
    //         this.$store.state.APIData = response.data
    //            this.myData[0].name = JSON.parse(JSON.stringify(response.data[0].name).toString());
    //  this.myData[0].rate = JSON.parse(JSON.stringify(response.data[0].rate).toString());
    //       })
    //       .catch(err => {
    //         console.log(err)
    //       })
 
 
    // console.log(data.data[0])
 



   // this.APIData[0].rate = JSON.parse(JSON.stringify(data.data[0]).toString());

 
  // })
  // .catch(error => {
  //    alert(error);
  //   console.log(error);
  // })
      
    }
  },
 beforeMount(){
   this.LoadHomeData();
 }
};


</script>
