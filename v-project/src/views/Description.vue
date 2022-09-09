
<template>
<div class="description">
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
      <title>Description</title>
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

      <!-- start description section-->
      <div class="row">
        <div class="column1">
          <img v-bind:src="require('../assets/' + name + '.jpg')" />
        </div>

        <div class="column1 dcs">
          <h1>{{ name }}</h1>
          <p v-if="name=='Bosch Washer'">{{Bosch_Washer}}</p>
          <p v-if="name=='Beko Washer'">{{Beko_Washer}}</p>
          <p v-if="name=='Aeg Washer'">{{Aeg_Washer}}</p>
          <p v-if="name=='Hoover Washer'">{{Hoover_Washer}}</p>
          <p v-if="name=='Hotpoint Washer'">{{Hotpoint_Washer}}</p>
          <p v-if="name=='Indesit Washer'">{{Indesit_Washer}}</p>
          <p v-if="name=='Whirlpool Washer'">{{Whirlpool_Washer}}</p>
          <p v-if="name=='Baumatic Washer'">{{Baumatic_Washer}}</p>

          <p v-if="name=='Hotpoint Oven'">{{Hotpoint_Oven}}</p>
          <p v-if="name=='Siemens Oven'">{{Siemens_Oven}}</p>
          <p v-if="name=='Bosch Oven'">{{Bosch_Oven}}</p>
          <p v-if="name=='Smeg Oven'">{{Smeg_Oven}}</p>
          <p v-if="name=='Neff Oven'">{{Neff_Oven}}</p>
          <p v-if="name=='Zanussi Oven'">{{Zanussi_Oven}}</p>
          <p v-if="name=='Whirlpool Oven'">{{Whirlpool_Oven}}</p>
          <p v-if="name=='Aeg Oven'">{{Aeg_Oven}}</p>

          <p v-if="name=='IQool Conditioner'">{{IQool_Conditioner}}</p>
          <p v-if="name=='Dehumidifiers Conditioner'">{{Dehumidifiers_Conditioner}}</p>
          <p v-if="name=='Electric Conditioner'">{{Electric_Conditioner}}</p>
          <p v-if="name=='EiQ-AM09 Conditioner'">{{EiQ_AM09_Conditioner}}</p>
          <p v-if="name=='De longhi_pacan Conditioner'">{{De_longhi_pacan_Conditioner}}</p>
          <p v-if="name=='Aeg Conditioner'">{{Aeg_Conditioner}}</p>
          <p v-if="name=='Amcor Conditioner'">{{Amcor_Conditioner}}</p>
          <p v-if="name=='Delonghi Conditioner'">{{Delonghi_Conditioner}}</p>

          <p v-if="name=='Haier Freezer'">{{Haier_Freezer}}</p>
          <p v-if="name=='Hisense Freezer'">{{Hisense_Freezer}}</p>
          <p v-if="name=='Hoover Freezer'">{{Hoover_Freezer}}</p>
          <p v-if="name=='Hotpoint Freezer'">{{Hotpoint_Freezer}}</p>
          <p v-if="name=='Samsung Freezer'">{{Samsung_Freezer}}</p>
          <p v-if="name=='Bosch Freezer'">{{Bosch_Freezer}}</p>
          <p v-if="name=='LG Freezer'">{{LG_Freezer}}</p>
          <p v-if="name=='Beko Freezer'">{{Beko_Freezer}}</p>
          <p v-if="name=='Fridge Freezer'">{{Fridge_Freezer}}</p>


          <p v-if="name=='Range Cookers'">{{Range_Cookers}}</p>
          
        </div>
        <div>
          <button  class=" pay login100-form-btn">  <a style=" color: white;"  href="   btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalContactForm">
Buy </a></button>


          
        </div>
        <!--start popup -->


        <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div style="height: 550px; width:600px;" class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Complete the Info Please</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

      </div>
      <div class="row">
<div class="column1">
         <div class="md-form mb-5">
   
         <input type="text" id="form29" class="mr input_std" placeholder="Your name">
        </div>
        <div class="md-form mb-5">
          
         <input type="number" id="form29" class="mr input_std" placeholder="Your age">
        </div>

        <div class="md-form mb-5">
  
<input type="email" id="form29" class="mr input_std" placeholder="Your email">        </div>
</div>
<div class="column1">
          <div class="md-form mb-5">
   
<input type="number" id="form29" class= "mr input_std" placeholder="Quantity">        
        </div>

        <div class="md-form">
   
<input type="email" id="form29" class="mr input_std" placeholder="Your address">          
        </div>
                <div class="md-form">
   
<input type="number" id="form29" class="mr input_std" placeholder="Your phone">          
        </div>
</div>
      </div>

      <div class="modal-body mx-3">
   



      </div>
        <button v-on:click="confirm()" class="buy-btn login100-form-btn">OK </button>
    </div>
  </div>
</div>


        <!--end popup -->
      </div>

      <!-- end description section-->
    </body>
  </html>
</div>
</template>

<script>
import router from "../router";

export default {
  name: "Description",
  data() {
    return {
      Bosch_Washer:
        "8kg drum capacity - great for medium-sized households Dedicated programme treats delicate fabrics with care" +
        "Programme for mixed fabrics Super quiet model - great for open plan living Dimensions (cm) - H81.8 x W59.6 x D54.4 ",

      Beko_Washer:
        "8kg drum capacity - great for medium-sized households Automatically adjusts settings to take care of clothes" +
        "ActivEco 20 programme - for mixed colours and fabrics" +
        "Hygiene+ and 90 degree cycles help kill germs" +
        "Dimensions (cm) - H82 x W59.6 x D55",
      Aeg_Washer:
        "8kg drum capacity - great for medium-sized households Fast laundry days – washes a full load in 28 minutes" +
        "Efficient function can reduce programme times Special programme helps you save water and energy" +
        "Dimensions (cm) - H82 x W60 x D55.4 ",

      Hoover_Washer:
        "8kg drum capacity - great for medium-sized households Automatically adjusts settings to take care of clothes" +
        "ActivEco 20 programme - for mixed colours and fabrics" +
        "Hygiene+ and 90 degree cycles help kill germs" +
        "Dimensions (cm) - H82 x W59.6 x D55",

      Hotpoint_Washer:
        "7kg drum capacity - great for medium-sized households Easily removes 20 of the most common stains" +
        "Anti Stain Quick Wash programme - removes stains fast Certified Woolmark Blue programme - care for woollens" +
        "Dimensions (cm) - H82 x W59.5 x D54.5 ",
      Indesit_Washer:
        "7kg drum capacity - great for medium-sized households" +
        "Really efficient A++ energy rating Speedy 30 minute quick wash programme" +
        "Special Push & Wash programme is ideal for mixed loads Dimensions (cm) - H82 x W59.5 x D54.5",

      Whirlpool_Washer:
        "7kg drum capacity - great for medium-sized households The most efficient A+++ energy rating" +
        "Automatically adjusts settings to take care of clothes Tumbles laundry after wash cycle to keep clothes fresh Dimensions (cm) - H82 x W59.5 x D54.5",
      Baumatic_Washer:
        "7kg drum - ideal for medium-sized households Take your pick from 14, 30 and 40 minute quick washes" +
        "Wash mixed fabric types together at the same time Gentle programme for delicate woollen items Dimensions (cm) - H82 x W60 x D52.5",

      Bosch_Oven:
        "Main oven gives you lots of different ways to cook Second electric oven has a handy grill setting" +
        "Unique fan system cooks food evenly over every shelf Smooth ceramic interior wipes clean easily Dimensions (cm) H88.8 x W59.4 x D55",
      Siemens_Oven:
        "Main oven gives you lots of different ways to cook Second electric oven with handy grill setting" +
        "10 automatic programmes make cooking easier Special liners absorb grease to make cleaning easier Dimensions (cm) H88.8 x W59.4 x D55",
      Aeg_Oven:
        "Main oven gives you lots of different ways to cook Distributes heat evenly so food cooks on every shelf " +
        "Set the oven to turn off when your food is ready Grease-proof enamel coating makes oven cleaning easy Dimensions (cm) H88.8 x W59.4 x D54.8 ",
      Smeg_Oven:
        "2 multifunctional ovens give you more ways to cook Cook dishes together without flavours transferring" +
        "Automatic programmes take the guess work out of cooking Special function uses steam to keep your oven clean Dimensions (cm) - H88.4 x W59.7 x D57",
      Neff_Oven:
        "2 ovens with a main electric fan oven Gives you fast, even cooking without flavour transfers " +
        "Set the oven to turn off when your food is ready Grease-proof enamel coating makes oven cleaning easy Dimensions (cm) - H88.8 x W59.4 x D55",
      Zanussi_Oven:
        "Main electric fan oven cooks food evenly on every shelf Second electric oven with handy grill setting" +
        "Set the oven to turn off when your food is ready Special liners absorb grease to make cleaning easier" +
        "Dimensions (cm) H88.8 x W59.4 x D54.8 ",
      Whirlpool_Oven:
        "Main oven gives you lots of different ways to cook Second electric oven with handy grill setting" +
        "Set the oven to turn off when your food is ready Special liners absorb grease to make cleaning easier Dimensions (cm) H88.7 x W59.5 x D57.5",
      Hotpoint_Oven:
        "Main electric fan oven cooks food evenly on every shelf Second electric oven has a handy grill setting" +
        "Set the oven to turn off when your food is ready Special liners absorb grease to make cleaning easier Dimensions (cm) H88.2 x W59.7 x D57.7",

      IQool_Conditioner:
        "1050 Watt power output Rated A for energy efficiency  Controls temperature and humidity for added comfort" +
        "LED display clearly shows you cooling level Can be operated by remote control",

      Dehumidifiers_Conditioner:
        "1000 Watt Power Output Rated A for energy efficiency" +
        "3 speed settings to choose from Dehumidifying function removes moisture from the air Can be operated by remote control",

      Electric_Conditioner:
        "1000 Watt power output 3 speed settings to choose from" +
        "Rated A for energy efficiency Automatically adjusts temperatures to suit your needs Can be operated by remote control",

      EiQ_AM09_Conditioner:
        "950 Watt power output Rated A+ for energy efficiency 3 speed settings to choose from" +
        "Quiet setting is perfect for using at night Can be operated by remote control",

      De_longhi_pacan_Conditioner:
        "2700 Watt power output 3 speed settings to choose from Fan-only function leaves the room perfectly cool" +
        "Controls temperature and humidity for added comfort LED display clearly shows you cooling level",

      Aeg_Conditioner:
        "2400 Watt power output 3 speed settings to choose from Fan-only function leaves the room perfectly cool" +
        "Set the timer to fit with your schedule Can be operated by remote control",

      Amcor_Conditioner:
        "940 Watt power output Rated A+ for energy efficiency 3 speed settings to choose from" +
        "Uses recycled condensation to cool the condenser Can be operated by remote control",

      Delonghi_Conditioner:
        "700 Watt power output 3 speed settings to choose from Controls temperature and humidity for added comfort" +
        "Specially designed so it's really quiet when in use Can be operated by remote contro",

      Haier_Freezer: "456 litre capacity - holds 25 bags of food shopping Special compartment is ideal for meat, fish and dairy "+

"Humidity control keeps fruit and veg fresher for longer Removes 99.8% of bacteria from inside the fridge"+

"Dimensions (cm) - H180.4 x W83.3 x D66.6",
      Hisense_Freezer: "431 Litre capacity - holds 23 bags of food shopping Clever tech stops ice build-ups in the fridge & freezer" +

"Water dispenser - no plumbing required Fill tray with water and twist to get ice Narrow width - 79.4cm",

      Hoover_Freezer: "432 litre capacity - holds 24 bags of food shopping Clever tech stops ice build-ups in the fridge & freezer"+

"Special zone lets you adjust the freezer's temperature Drawer with adjustable humidity keeps fruit & veg fresh Dimensions (cm) - H181 x W79 x D67.5",
      Hotpoint_Freezer: "501 litre capacity - holds 27 bags of food shopping Circulated cool air keeps food fresher for longer "+

"Home bar door gives easy access to cold drinks Water and ice dispenser - plumbing required Standard width - 91.2cm",
      Samsung_Freezer: "544 litre capacity - holds 30 bags of food shopping Frost free freezer - never manually defrost again"+

"Annual energy cost - . Water dispenser - no plumbing required Standard width - 91cm",

      Bosch_Freezer: "404 litre capacity - holds 22 bags of food shopping Clever tech stops ice build-ups in the fridge & freezer"+

"Annual energy  Bright LED light illuminates the interior Narrow width - 71cm ",
      LG_Freezer: "591 Litre capacity - holds 32 bags of food shopping Air circulates around the cabinet, keeping food fresh "+
"Inverter Linear Compressor is quieter & longer-lasting Water and ice dispenser - plumbing required Standard width - 91.2cm",
      Beko_Freezer: "558 litre capacity - holds 31 bags of food shopping Frost free freezer - never manually defrost again"+

"Active Oxygen prolongs food freshness & reduces odours Fill tray with water and twist to get ice Dimensions (cm) - H186 x W84 x D75",
   
   Fridge_Freezer :'The 185 cm high fridge-freezer combination has 1 cooling drawer and 4 shelves in the refrigerator compartment and has 3 freezer compartments in the freezer compartment at the bottom. In the door of the refrigerator compartment there are also 3 door compartments. The refrigerator compartment also has 2 temperature zones, which makes the device complete. The All-Around Cooling cools every part of the refrigerator evenly. The system continuously monitors the temperature and circulates cooling through vents. Products are cooled everywhere and stay fresh longer.'
   };
  },
  created() {
    this.name = this.$route.params.name;
  },
  methods: {
    navigate() {
      router.go(-1);
    },
     confirm() {
  confirm("Thanks for confirm")},
  },


};

</script>




  