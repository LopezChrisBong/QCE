import {createRouter, createWebHistory} from 'vue-router'

import Home from '../components/pages/home.vue'
import Nav from '../components/pages/qce_nav.vue'
import Response from '../components/pages/response.vue'
import ResponseForm from '../components/pages/response_form.vue'
import Evaluation from '../components/pages/qce_evaluation.vue'
import EvaluationView from '../components/pages/evaluation_view.vue'

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
        path: '/evaluationview',
        component: EvaluationView
    },
    
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router