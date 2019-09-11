import Vue from "vue";
import Router from "vue-router";
import WorkerMan from "./components/conten/business/WorkerMan";
import Home from "./components/conten/business/Home";
import Teacher from "./components/conten/business/Teacher";
import UnGraduStu from "./components/conten/business/UnGraduStu";
import GraduStu from "./components/conten/business/GraduStu";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/Home",
      name: "Home",
      component: Home
    },
    {
      path: "/WorkerMan",
      name: "WorkerMan",
      component: WorkerMan
    },
    {
      path: "/Teacher",
      name: "Teacher",
      component: Teacher
    },
    {
      path: "/GraduStu",
      name: "GraduStu",
      component: GraduStu
    },
    {
      path: "/UnGraduStu",
      name: "UnGraduStu",
      component: UnGraduStu
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
