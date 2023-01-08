
import ReactDOM from "react-dom";
import SubmitValidationForm from "./SubmitValidationForm";
import { submit } from "redux-form";
import store from "./store";
import { BrowserRouter, Route, Routes,Router } from "react-router-dom";
import { Provider } from "react-redux";
import React, { Suspense } from "react";
const Logout = React.lazy(()=> import("./logout"));

const rootEl = document.getElementById("root");




ReactDOM.render(

  

  <Provider store={store}>
    
    <BrowserRouter store={store}>
       
        <Routes>
            <Route exac path="/" element={<SubmitValidationForm onSubmit={submit} />}></Route>
            <Route path="/logout" element={<Suspense fallback={<div>Still Loading</div>}>
<Logout/>
    </Suspense>} />
        </Routes>
      
     
    </BrowserRouter>

      

  </Provider>,





  rootEl
 
);
