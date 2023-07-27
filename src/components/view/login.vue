<template>
    <div class="">
        <div class="flex justify-center">
        <p class="text-lg font-semibold">Login</p>
        </div>
        <div class="flex justify-center">
        <form>
            <div>
                <input type="text" v-model="email" placeholder="Enter Email" class="border mb-2 px-12 py-1"/><br/>
                <input type="password" v-model="password" placeholder="Enter Password" class="border px-12 py-1" /> <br/>
            </div>
            <div class="flex mt-5 justify-between mx-8 ">
                <button class="border-none bg-green-400 text-center p-1 w-16" @click="login">Login</button>
               <a href="signup" class="bg-green-400 p-1 rounded-md">signup</a>
            </div>
           
 </form>    
        </div>
    <!--

    -->
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
      async  login(){
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            );
            if(result.status == 200)
            {
            localStorage.setItem("user-info",JSON.stringify(result.data[0]))
            this.$router.push({name:'home'})
           }
        }
    },  
    mounted(){
        let user =localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'home'})
        }
    }
}
</script>