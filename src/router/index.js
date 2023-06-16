import {createRouter, createWebHistory} from 'vue-router'

import Home from '../components/pages/home.vue'
import Nav from '../components/pages/qce_nav.vue'
import Response from '../components/pages/response.vue'
import ResponseForm from '../components/pages/response_form.vue'
import Evaluation from '../components/pages/qce_evaluation.vue'
import Commitment from '../components/pages/commitment.vue'
import Knowledge from '../components/pages/knowledge.vue'
import Independent from '../components/pages/independent.vue'
import Management from '../components/pages/management.vue'
import Comments from '../components/pages/comments.vue'
import Review from '../components/pages/review.vue'
import QCEReport from '../components/pages/qcereports.vue'
import FacultyReport from '../components/pages/facultyreport.vue'
import Pdfreport from '../components/pages/pdfreport.vue'
import Choose from '../components/pages/choose.vue'
import Poster from '../components/pages/post.vue'


const routes =[
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/nav',
        name: 'Nav',
        component: Nav
    },
    {
        path: '/response',
        name: 'Response',
        component: Response
    },
    {
        path: '/response_form',
        name: 'ResponseForm',
        component: ResponseForm
    },
    {
        path: '/qceevaluation',
        name: 'Evaluate',
        component: Evaluation
    },
    {
        path: '/commitment',
        name: 'Commitment',
        component: Commitment
    },
    {
        path: '/knowledge',
        name: 'Knowledge',
        component: Knowledge
    },
    {
        path: '/independent',
        name: 'Independent',
        component: Independent
    },
    {
        path: '/management',
        name: 'Management',
        component: Management
    },
    {
        path: '/comments',
        name: 'Comments',
        component: Comments

    },
    {
        path: '/review',
        name: 'Review',
        component: Review
    },
    {
        path: '/qcereport',
        name: 'QCEReport',
        component: QCEReport
    }, 
    {
        path: '/facultyreport',
        name: 'FacultyReport',
        component: FacultyReport
    }, 
    {
        path: '/pdfreport',
        name: 'Pdfreport',
        component: Pdfreport
    }, 
    {
        path: '/choose',
        name: 'Choose',
        component: Choose
    }, 
    {
        path: '/poster',
        name: 'Poster',
        component: Poster
    }, 

]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router