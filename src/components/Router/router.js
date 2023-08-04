import { Route, Routes } from "react-router-dom";

import  {routes}  from "./paths";
import  {Navbar}  from "../Navbar/navbar";

export const Router = () => {
  return (
    <div className="container-fluid">
      <div className="row">
       {/* <Navbar/> */ }
       <Navbar routes={routes}/>
        <div className="col-md-10 col-12  p-5 m-0 d-flex justify-content-center">
          <Routes>

            {routes.map((item, key) => (
              <Route key={key} exact path={item.path} element={item.element} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
 
};
