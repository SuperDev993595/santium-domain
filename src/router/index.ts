import { createRouter, createWebHistory } from 'vue-router'
import SantiumDashboard from '@/views/SantiumDashboard.vue'
import AboutUs from '@/views/AboutUs.vue'
import OurServices from '@/views/OurServices.vue'
import WhyUs from '@/views/WhyUs.vue'
import ContactUs from '@/views/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SantiumDashboard,
      meta: {
        layout: 'DashboardLayout',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
      meta: {
        layout: 'DashboardLayout',
      },
    },
    {
      path: '/whyus',
      name: 'whyus',
      component: WhyUs,
      meta: {
        layout: 'DashboardLayout',
      },
    },
    {
      path: '/service',
      name: 'service',
      component: OurServices,
      meta: {
        layout: 'DashboardLayout',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs,
      meta: {
        layout: 'DashboardLayout',
      },
    },
  ],
})

export default router
