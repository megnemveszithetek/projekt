import About from "./components/About";
import Applicationdownload from "./components/Applicationdownload";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import Login from "./components/Login";
import Register from "./components/Register";

import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";


function App() {
  return (
    <div>
    <Navbar />
      <BrowserRouter>
      
      <Switch>
        <Route path='/' exact>
          <Main />
          <Applicationdownload/>
          <About/>
          <Question/>
          <Login/>
          <Register/>
          </Route>  
        <Redirect to={'/'} />
        </Switch>
      
      </BrowserRouter>
      <Footer/> 
    </div>
  );
}

export default App;
