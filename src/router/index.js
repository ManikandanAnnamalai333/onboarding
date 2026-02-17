import { createRouter, createWebHistory } from 'vue-router'
import PersonalDetails from '../components/PersonalDetails.vue'
import BankDetails from '../components/BankDetails.vue'
import Review from '../components/Review.vue'
import SuccessPage from '../components/SuccessPage.vue'

const routes = [
  {
    name: 'PersonalDetails',
    path: '/',
    component: PersonalDetails,
  },
  {
    name: 'BankDetails',
    path: '/BankDetails',
    component: BankDetails,
  },
  {
    name: 'Success',
    path: '/Review',
    component: Review,
  },
  {
    name: 'Finalpage',
    path: '/SuccessPage',
    component: SuccessPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
