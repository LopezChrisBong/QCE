<template>
    <div class="">
        <div class="flex justify-center">
        <p class="text-lg font-semibold">Login</p>
        </div>
        <div class="flex justify-center">
        <form action=" " method="POST">
            <div>
                <input type="text" v-model="Admin.username" placeholder="Enter username" class="border mb-2 px-12 py-1"/><br/>
                <input type="password" v-model="Admin.password" placeholder="Enter Password" class="border px-12 py-1" /> <br/>
            </div>
            <div class="flex mt-5 justify-between mx-8 ">
                <button class="border-none bg-green-400 text-center p-1 w-16" @click="onLogin">Login</button>
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
            Admin:{
                username:null,
            password:null,
            }
            
        }
    },
    methods:{
        onLogin(){
            var data = new formData();
            data.append('username',this.Admin.username);
            data.append('password',this.Admin.password);
            axios.post('http://localhost/QCE/src/Api/api.php?action=login',data).then((res)=>{
                if(res.data.error){
                    console.log("Error",res.data);
                }
                else{
                    console.log("Success",res.data.message);
                    this.$router.push("/home")
                }
                

            }).catch((err)=>{
                console.log("error",err)
            })

            alert("im working");
        }
    }
}
</script>