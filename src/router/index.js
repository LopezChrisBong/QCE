import {createRouter, createWebHistory} from 'vue-router'

import Home from '../components/pages/home.vue'
import Nav from '../components/pages/qce_nav.vue'
import Response from '../components/pages/response.vue'
import ResponseForm from '../components/pages/response_form.vue'
import Evaluation from '../components/pages/qce_evaluation.vue'
import Commitment from '../components/pages/commitment/commitment.vue'
import Commitmentq2 from '../components/pages/commitment/commitmentq2.vue'
import Commitmentq3 from '../components/pages/commitment/commitmentq3.vue'
import Commitmentq4 from '../components/pages/commitment/commitmentq4.vue'
import Commitmentq5 from '../components/pages/commitment/commitmentq5.vue'
import Knowledge from '../components/pages/knowledge/knowledge.vue'
import Knowledgeq2 from '../components/pages/knowledge/knowledgeq2.vue'
import Knowledgeq3 from '../components/pages/knowledge/knowledgeq3.vue'
import Knowledgeq4 from '../components/pages/knowledge/knowledgeq4.vue'
import Knowledgeq5 from '../components/pages/knowledge/knowledgeq5.vue'
import Independent from '../components/pages/Independent/independent.vue'
import Independentq2 from '../components/pages/Independent/independentq2.vue'
import Independentq3 from '../components/pages/Independent/independentq3.vue'
import Independentq4 from '../components/pages/Independent/independentq4.vue'
import Independentq5 from '../components/pages/Independent/independentq5.vue'
import Management from '../components/pages/Management/management.vue'
import Managementq2 from '../components/pages/Management/managementq2.vue'
import Managementq3 from '../components/pages/Management/managementq3.vue'
import Managementq4 from '../components/pages/Management/managementq4.vue'
import Managementq5 from '../components/pages/Management/managementq5.vue'
import Comments from '../components/pages/comments.vue'
import Review from '../components/pages/review.vue'
import QCEReport from '../components/pages/qcereports.vue'
import FacultyReport from '../components/pages/facultyreport.vue'
import Pdfreport from '../components/pages/pdfreport.vue'
import Choose from '../components/pages/choose.vue'


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
        path: '/commitmentq2',
        name: 'Commitmentq2',
        component: Commitmentq2
    },
    {
        path: '/commitmentq3',
        name: 'Commitmentq3',
        component: Commitmentq3
    },
    {
        path: '/commitmentq4',
        name: 'Commitmentq4',
        component: Commitmentq4
    },
    {
        path: '/commitmentq5',
        name: 'Commitmentq5',
        component: Commitmentq5
    },
    {
        path: '/knowledge',
        name: 'Knowledge',
        component: Knowledge
    },
    {
        path: '/knowledgeq2',
        name: 'Knowledgeq2',
        component: Knowledgeq2
    },
    {
        path: '/knowledgeq3',
        name: 'Knowledgeq3',
        component: Knowledgeq3
    },
    {
        path: '/knowledgeq4',
        name: 'Knowledgeq4',
        component: Knowledgeq4
    },
    {
        path: '/knowledgeq5',
        name: 'Knowledgeq5',
        component: Knowledgeq5
    },
    {
        path: '/independent',
        name: 'Independent',
        component: Independent
    },
    {
        path: '/independentq2',
        name: 'Independentq2',
        component: Independentq2
    },
    {
        path: '/independentq3',
        name: 'Independentq3',
        component: Independentq3
    },
    {
        path: '/independentq4',
        name: 'Independentq4',
        component: Independentq4
    },
    {
        path: '/independentq5',
        name: 'Independentq5',
        component: Independentq5
    },
    {
        path: '/management',
        name: 'Management',
        component: Management
    },
    {
        path: '/managementq2',
        name: 'Managementq2',
        component: Managementq2
    },
    {
        path: '/managementq3',
        name: 'Managementq3',
        component: Managementq3
    },
    {
        path: '/managementq4',
        name: 'Managementq4',
        component: Managementq4
    },
    {
        path: '/managementq5',
        name: 'Managementq5',
        component: Managementq5
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
   

]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router