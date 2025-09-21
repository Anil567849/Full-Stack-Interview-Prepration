import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Signup from './component/Signup';
import Login from './component/Login';
import {Route, Switch} from 'react-router-dom';
import ErrorPage from './component/ErrorPage';
import Logout from './component/Logout';
import { createContext, useReducer } from 'react';
import {initialState, reducer} from './reducer/UserReducer';

export const UserContext = createContext();

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" > <Home/></Route>
      <Route exact path="/about" > <About/></Route>
      <Route exact path="/contact" > <Contact/></Route>
      <Route exact path="/signup" > <Signup/></Route>
      <Route exact path="/login" > <Login/></Route>
      <Route exact path="/logout" > <Logout/></Route>

      {/* //error page  */}
      <Route> <ErrorPage/> </Route>
    </Switch>
  )
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
        <Navbar/>
        <Routing/>
      </UserContext.Provider>
    </>
  );
}

export default App;
