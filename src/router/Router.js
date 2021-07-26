import {createRouter, createWebHistory} from 'vue-router';
import About from '../pages/About';
// import Home from '../pages/Home';
import Login from "../pages/Login";
import Signup from "../pages/Signup"
import Form from "../pages/Form";


const routes=[
    {
        path:'/',
        name:'Login',
        component:Login
    },
    {
        path:'/about',
        name:'About',
        component:About
    },
    {
        path:'/form',
        name:'Form',
        component:Form
    },
    {
        path:'/signup',
        name:'Signup',
        component:Signup
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;