<template>
    <div class="login">

        <div class="formLogin">

            <p class="text-danger" v-if="error"> {{ error }}</p>
            <form @submit.prevent="login">
                <input class="input_auth" type="email" placeholder="Enter your Email" v-model="form.email">
                <br/>
                <input class="input_auth" type="password" placeholder="Enter yout Password" v-model="form.password">
                <br/>
                <input  type="submit" value="Login" class="input_auth submit">
            </form>
        </div>
        
    </div>

</template>

<script setup>
import { reactive,ref } from 'vue';
import  { useRouter } from 'vue-router'

const router=useRouter()
 
let form=reactive({
    email:'',
    password:''
})

let error=ref('')
const login =async()=>{
    await axios.post('/api/login',form)
    .then(response=>{
        if(response.data.success){
            localStorage.setItem('token',response.data.data.token)
            router.push('/admin/home')
        } else{
            error.value=response.data.message
        }
    })
}

</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fira sans', 'sans-serif';
        font-size: 16px;
    }
    .login{
        background: #6C5ce7;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }

    .formLogin{
        display: flex;
        align-items: center;
        width: 22.8em;
        height: 55em;
        margin: 0 auto 0 auto;
        overflow: hidden;
    }

    .input_auth{
        background: rgb(228, 232, 243,0.8);
        background-position: 0.5em 0.6em;
        border: none;
        color: rgb(80, 80, 80, 1);
        padding: 0 0 0 4em;
        margin: 0 0 1em 0;
        width: 20em;
        height: 3em;
        outline: none;
    }

    .input_auth:hover{
        background-color: rgba(255, 255, 255, 255);
    }

    .input_auth:focus{
        background-color: rgba(255, 255, 255, 255);
    }

    .submit{
        color: rgba(35, 35, 35, 0.8);
        background: rgba(220, 220, 220, 1);
        padding: 0;
        margin: 2.5em 0 0 5em;
        width: 10em;
        text-transform: uppercase;
        cursor: pointer;
        transition: background-color 0.5s;
    }

    .submit:hover{
        background: #43467f;
        color: white;
    }

    .submit:focus{
        background: #43467f;
        color: white;
    }

    .text-danger{
        color:red;
    }
</style>