import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorldView from "../views/HelloWorldView.vue";
import HomeView from "../views/HomeView.vue";
import UnitsView from "../views/UnitsView.vue";
import TasksView from "../views/TasksView.vue";
const routes = [
  {
    path: "/",
    name: "Hello World",
    component: HelloWorldView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/units",
    name: "units",
    component: UnitsView,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

console.log();
export default router;
