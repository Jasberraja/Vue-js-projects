<template>
    <header>
        <h4>
            {{title}}
        </h4>
        <!-- <Button text="Open Form" @click="onOpenForm"></Button> -->
        <Button v-show="homePage"
        :text="showTaskForm ?'x close':'+ ADD TASK'" 
        :color="showTaskForm ?'red':'green'" 
        @click="$emit('click-add')" />
        <Button v-show="homePage" text="Log Out" color="red" @click="logOut" />
    </header>
</template>


<script>
import Button from "./Button.vue"

    export default {
        name:'Header',
        props:{
            title:{
                type:String,
                default:'JAS APP',
            },
            showTaskForm:{
                type:Boolean,
                default:false
            }
        },
        components:{
            Button,
        },
        methods:{
            onOpenForm(){
                this.$router.push('form');
            },
            logOut(){
                this.$router.push('/');
            }
        },
        computed:{
            homePage(){
                if(this.$route.path==='/home'){
                    return true;
                }
                else{
                    return false;
                }
            },
        }
    }
</script>


<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
h4{
    margin-left: 10px;
}
</style>