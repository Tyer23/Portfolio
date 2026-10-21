import { createRouter, createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Experiences from '../components/Experiences.vue'
import Projects from '../components/Projects.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/experiences', component: Experiences },
    { path: '/projects', component: Projects}
]

const router = createRouter({
      history: createWebHashHistory(import.meta.env.BASE_URL),
      routes,
})

export default router;