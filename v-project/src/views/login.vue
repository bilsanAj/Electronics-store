<template>
    <div>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>login</h1>
    <input type="text" placeholder="username" v-model="username">
    <br><br>
    <input type="password" name="" id="" placeholder="password" v-model="password">

    <br><br>
<button @click="login">click</button>
</body>
</html>
</div>
</template>
<script>

 //   import axios from "axios";
    export default {
      
      name: "login",
      data(){
        return {
 username:'',
 password:'',
 isCorrectAuth:false,
        }
      },
    
       methods: {
           
        login(){
            this.$store.dispatch('userLogin',{
            username : this.username,
            password : this.password
            })
            .then(()=>{
                this.$router.push({name:'Home'})
            })


    //   axios
    //   .post('http://127.0.0.1:8000/accounts/login/')
    //   .then(data =>{
     
    //     this.APIData[0].name = JSON.parse(JSON.stringify(data.data[0].name).toString());
    //     this.APIData[0].rate = JSON.parse(JSON.stringify(data.data[0].rate).toString());
    //     console.log(data.data[0])
     
    
    
    
       // this.APIData[0].rate = JSON.parse(JSON.stringify(data.data[0]).toString());
    
     
    //   })
    //   .catch(error => {
    //      alert(error);
    //     console.log(error);
    //   })
          
        }
      },
     beforeMount(){
     //  this.LoadHomeData();
     }
    };
    
    
    </script>
    