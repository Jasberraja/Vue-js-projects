<template>
       <h1>SIGNUP PAGE</h1>

   <div class="formdiv">
        <form @submit="onSignup">
            <div>
                <label for="firstname">First Name</label>
                <input v-model="firstName" class="form-control" id="firstname" type="text" placeholder="First name">
            </div>
             <div>
                <label for="lastname">Last Name</label>
                <input v-model="lastName" class="form-control" id="lastname" type="text" placeholder="lastname">
            </div>
            <div>
                <label for="company">Company</label>
                <input v-model="company" class="form-control" id="company" type="text" placeholder="company">
            </div>
            <div>
                <label>Email id:</label>
                <input class="form-control" v-model="email" type="text" placeholder="email id">
            </div>
            <div>
                <label>Password:</label>
                <input class="form-control" v-model="password" type="password" placeholder="password">
            </div>
            <div>
                <label>Re Enter Password:</label>
                <input class="form-control" v-model="rePass" type="password" placeholder="re enter password">
            </div>
            <div>
                <button class="btn" type="submit">SIGNUP</button>
                <span>OR <router-link to="/">Login</router-link></span>
            </div>
        </form>
        
        
    </div>
</template>

<script>
export default {
    name:'Signup',
    methods:{

        onSignup(e){
  e.preventDefault();           
   const signupData={
                firstName:this.firstName ? this.firstName:"",
                lastName:this.lastName ? this.lastName:"",
                company:this.company ? this.company:"",
                email:this.email ? this.email : "",
                password:this.password ? this.password : ""
            }
            if(this.password == this.rePass){
            console.log(signupData);

            fetch("api/submit",{
        method:'POST',
         headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(signupData),
            })
            .then(res =>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
        }else{
            window.alert('mismatch password')
        }
        }

    }
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
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>