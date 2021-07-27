<template>
        <h1>LOGIN PAGE</h1>

    <div class="formdiv">
        <form @submit="onLogin">
            <div>
                <label>Email id:</label>
                <input class="form-control" v-model="email" type="text" placeholder="email id">
            </div>
            <div>
                <label>Password:</label>
                <input class="form-control" v-model="password" type="password" placeholder="password">
            </div>
            <div>
                <button class="btn" type="submit">LOGIN</button>
                <span>OR <router-link to="/signup">SIGNUP</router-link></span>
            </div>
        </form>
        
        
    </div>
</template>

<script>
export default {
    name:'Login',
    methods:{
       onLogin(e){
  e.preventDefault();           
   const loginData={
                email:this.email ? this.email : "",
                password:this.password ? this.password : ""
            }
            console.log(loginData);

         fetch("api/login",{
        method:'POST',
         headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(loginData),
            })
            .then(res =>{
                console.log(res);
                if(res.status==200){
                    // window.alert("logged in successfully");
                      this.$router.push('home');
                }
                else{
                     window.alert("login not successfull");
                }
            })
            .catch(err=>{
                console.log(err);
            })
        
        }
    },

}
</script>


<style scoped>
.form-control {
    display: block;
    width: 80%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.btn {
    display: inline-block;
    margin-top: 10px;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    user-select: none;
    color: #fff;
    background-color: #15b600;
    border-color: #38c700;
}
.formdiv{
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>