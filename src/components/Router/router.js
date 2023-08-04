import { Route, Routes } from "react-router-dom";

import  {routes}  from "./paths";
import  {Navbar}  from "../Navbar/navbar";

export const Router = () => {
  return (
      <div>
       <Navbar routes={routes}/>
        
          <Routes>
            {routes.map((item, key) => (
              <Route key={key} exact path={item.path} element={item.element} />
            ))}
          </Routes>
        
      </div>
      );
 
};
