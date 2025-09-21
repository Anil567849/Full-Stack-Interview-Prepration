import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Search from './Search';
import User from './User';
import Error from './Error';
import Navbar from './Navbar';













/*
// @@@@@@@@@@@@@@@@@@222
// 56 VIDEO - ROUTER
function App() {
  
  return (
    <>

    <Navbar />
    <Switch>
      <Route exact path="/" component={About}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route component={Error}/>
    </Switch>

      {/* <About />
      <Contact /> *//*}
    </>
  );
}
*/ 





/*
function App() {
  
// @@@@@@@@@@@@@@@@@@@@
// 57 VIDEO = COMPONENT VS RENDER
// COMPONENT = IT WILL CREATE NEW CODE EVERYTIME = USE THIS WHEN YOU ARE SENDING ANY PROPS
// RENDER = IT WILL UPDATE ONLY SOME PIECE OF CODE INSTEAD OF CREATING NEW = USE THIS WHEN YOU SENDING SOME PROPS
  return (
    <>

    <Navbar />
    <Switch>

      {/* USING COMPONENT  *//*}
      {/* <Route exact path="/" component={About}/> *//*}
      {/* <Route exact path="/" component={ () => <About name="About" />}/> *//*}


      {/* USING RENDER  *//*}
      <Route exact path="/" render={ () => <About name="About" />}/>









      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route component={Error}/>
    </Switch>

      {/* <About />
      <Contact /> *//*}
    </>
  );
}
*/





function App() {
  
// @@@@@@@@@@@@@@@@@@@@
// 57 VIDEO = COMPONENT VS RENDER
// COMPONENT = IT WILL CREATE NEW CODE EVERYTIME = USE THIS WHEN YOU ARE SENDING ANY PROPS
// RENDER = IT WILL UPDATE ONLY SOME PIECE OF CODE INSTEAD OF CREATING NEW = USE THIS WHEN YOU SENDING SOME PROPS
  return (
    <>

    <Navbar />
    <Switch>

      {/* USING COMPONENT  */}
      {/* <Route exact path="/" component={About}/> */}
      <Route exact path="/" component={ () => <About name="About" />}/>


      {/* USING RENDER  */}
      <Route exact path="/" render={ () => <About name="About" />}/>









      <Route exact path="/about" component={About}/>
      <Route exact path="/about" component={About}/>




      {/* SENDING SINGLE PARAMETER */}
      <Route exact path="/user/:fName" component={User}/>

      {/* SENDING MULTIPLE PARAMETER */}
      <Route exact path="/user/:fName/:lName" component={User}/>
        
      <Route exact path="/search" component={Search}/>






      {/* redirect  */}
      {/* <Redirect  to="/" /> */}
      <Redirect path="/hello" to="/" />

      {/* //showing error page  */}
      <Route component={Error}/>

    </Switch>

      {/* <About />
      <Contact />  */}
    </>
  );
}









export default App;
