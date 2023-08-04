  import { Home } from "../../pages/Home/home";
  import { Er_404 } from "../../pages/Er_404/er_404";
  import Lesson_1 from "../../pages/Lesson1/lesson1";

export const  routes = 
 [
    { path: "/", name: "", element: <Home/>, icon: null },
    { path: "/home", name: "Főoldal", element: <Home/>, icon:""  }, 
    { path: "/lesson_1", name: "Első Lecke", element: <Lesson_1/>, icon:""  }, 
    { path: "/*", name: "", element: <Er_404/>, icon: null },
 ];