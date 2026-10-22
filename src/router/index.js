import { createRouter, createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Experiences from '../components/Experiences.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/experiences', component: Experiences },
    { path: '/projects', component: Projects},
    { path: '/contact', component: Contact}
]

const router = createRouter({
      history: createWebHashHistory(import.meta.env.BASE_URL),
      routes,
})

export default router;