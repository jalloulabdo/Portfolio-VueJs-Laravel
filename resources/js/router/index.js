import { createRouter,createWebHistory } from "vue-router";
///Admin
import homeAdminIndex from '../components/admin/home/index.vue';
import adminAboutIndex from '../components/admin/about/index.vue'
import adminServiceIndex from '../components/admin/services/index.vue'
import adminSkillIndex from   '../components/admin/skills/index.vue'
import adminEducationIndex from   '../components/admin/educations/index.vue'
import adminExperienceIndex from   '../components/admin/experiences/index.vue'
import adminProjectIndex from   '../components/admin/projects/index.vue'
import adminProjectNew from   '../components/admin/projects/new.vue'
import adminProjectEdit from   '../components/admin/projects/edit.vue'
import adminTestimonialIndex from   '../components/admin/testimonials/index.vue'
import adminTestimonialNew from   '../components/admin/testimonials/new.vue'
import adminTestimonialEdit from   '../components/admin/testimonials/edit.vue'
import adminMessageIndex from   '../components/admin/messages/index.vue'
import adminUserIndex from   '../components/admin/users/index.vue'
import adminUserProfile from   '../components/admin/users/profile.vue'
///pages
import homePageIndex from  '../components/pages/home/index.vue'
//notFound
import notFound from '../components/notFound.vue'
//login
import login from '../components/auth/login.vue'


const routes=[
    ///admin
    {
     path:'/admin/home',
     component:homeAdminIndex,
     name:'adminHome',
     meta:{
        requiresAuth:true
     }
    },
    {
        path:'/admin/about',
        component:adminAboutIndex,
        name:'adminAbout',
        meta:{
           requiresAuth:true
        }
    },{
        path:'/admin/service',
        component:adminServiceIndex,
        name:'adminService',
        meta:{
           requiresAuth:true
        }
    },{
        path:'/admin/skills',
        component:adminSkillIndex,
        name:'adminSkill',
        meta:{
           requiresAuth:true
        }
    },
    {
        path:'/admin/educations',
        component:adminEducationIndex,
        name:'adminEducation',
        meta:{
           requiresAuth:true
        }
    },{
        path:'/admin/experiences',
        component:adminExperienceIndex,
        name:'adminExperience',
        meta:{
           requiresAuth:true
        }
    },{
        path:'/admin/projects',
        component:adminProjectIndex,
        name:'adminProject',
        meta:{
           requiresAuth:true
        }
    },{
        path:'/admin/projects/new',
        component:adminProjectNew,
        name:'adminProjectnew',
        meta:{
           requiresAuth:true
        }
    },{
        path:'/admin/projects/edit/:id',
        component:adminProjectEdit,
        name:'adminProjectedit',
        meta:{
           requiresAuth:true
        },
        props:true 
    },
    {
        path:'/admin/testimonials',
        component:adminTestimonialIndex,
        name:'adminTestimonialindex',
        meta:{
           requiresAuth:true
        },
    },
    {
        path:'/admin/testimonials/new',
        component:adminTestimonialNew,
        name:'adminTestimonialnew',
        meta:{
           requiresAuth:true
        },
    },
    
    {
        path:'/admin/testimonials/edit/:id',
        component:adminTestimonialEdit,
        name:'adminTestimonialedit',
        meta:{
           requiresAuth:true
        },
        props:true 
    },{
        path:'/admin/messages',
        component:adminMessageIndex,
        name:'adminMessageindex',
        meta:{
           requiresAuth:true
        },
    },{
        path:'/admin/users',
        component:adminUserIndex,
        name:'adminUserindex',
        meta:{
           requiresAuth:true
        },
    },{
        path:'/admin/users/profile',
        component:adminUserProfile,
        name:'adminUserprofile',
        meta:{
           requiresAuth:true
        },
    },
    ///pages
    {
        path:'/',
        component:homePageIndex,
        name:'dashboard',
        meta:{
            requiresAuth:false
         }
    },
    ///notFound
    {
        path:'/:pathMatch(.*)*',
        component:notFound,
        name:'notFound',
        meta:{
            requiresAuth:false
         }
    },
    ///login
    {
        path:'/login',
        name:'login',
        component:login,
        meta:{
            requiresAuth:false
         }
    }
]

const router= createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to,from)=>{
    if(to.meta.requiresAuth && !localStorage.getItem('token')){
        return{name:'login'}
    }
})


export default router