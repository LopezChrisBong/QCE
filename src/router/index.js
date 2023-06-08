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


const routes =[
    {
        path: '/',
        component: Home
    },
    {
        path: '/nav',
        component: Nav
    },
    {
        path: '/response',
        component: Response
    },
    {
        path: '/response_form',
        component: ResponseForm
    },
    {
        path: '/qceevaluation',
        component: Evaluation
    },
    {
        path: '/commitment',
        component: Commitment
    },
    {
        path: '/knowledge',
        component: Knowledge
    },
    {
        path: '/independent',
        component: Independent
    },
    {
        path: '/management',
        component: Management
    },
    {
        path: '/comments',
        component: Comments
    },
    {
        path: '/review',
        component: Review
    },
    {
        path: '/qcereport',
        component: QCEReport
    }, 
    {
        path: '/facultyreport',
        component: FacultyReport
    }, 
    {
        path: '/pdfreport',
        component: Pdfreport
    }, 
    {
        path: '/choose',
        component: Choose
    }, 

]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router