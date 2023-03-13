import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import ConnexionView from '../pages/ConnexionView.vue'

import ProjetsView from '../pages/Projets/IndexView.vue'
import NewProjetView from '../pages/Projets/NewView.vue'

import LogicielsView from '../pages/Logiciels/IndexView.vue'
import NewLogicielView from '../pages/Logiciels/NewView.vue'

import routesFromPages from "~pages"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Home Page' } },
    { path: '/connexion', name: 'connexion', component: ConnexionView, meta: { title: 'Connexion Page' } },

    { path: '/projets', name: 'projets', component: ProjetsView, meta: { title: 'Projects Page' } },
    { path: '/newprojet', name: 'newprojet', component: NewProjetView, meta: { title: 'New Project' } },

    { path: '/logiciels', name: 'logiciels', component: LogicielsView, meta: { title: 'Logiciels Page' } },
    { path: '/newlogiciel', name: 'newlogiciel', component: NewLogicielView, meta: { title: 'New Logiciel' } },
    ...routesFromPages,
  ]
})

export default router
