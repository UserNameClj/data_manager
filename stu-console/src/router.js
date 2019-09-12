import Vue from "vue";
import Router from "vue-router";
import WorkerMan from "./components/conten/business/WorkerMan";
import Home from "./components/conten/business/Home";
import TeacherMsg from "./components/conten/business/TeacherMsg";
import StudentMsg from "./components/conten/business/StudentMsg";
import MasterMsg from "./components/conten/business/MasterMsg";

Vue.use(Router);
const routes = [
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
    path: "/TeacherMsg",
    name: "TeacherMsg",
    component: TeacherMsg
  },
  {
    path: "/MasterMsg",
    name: "MasterMsg",
    component: MasterMsg
  },
  {
    path: "/StudentMsg",
    name: "StudentMsg",
    component: StudentMsg
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
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
