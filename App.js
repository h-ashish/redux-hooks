import logo from './logo.svg';
import './App.css';
import Menu from './menu.js';
import './mar28assign1.css';
import './userregistration.css'
import TodoLocalStorage from './TodoLocalStorage';
import RandomPrime from './randomprime';
import Library from './library';
import Duplicate from './Duplicate';
import ShowTwice from './showtwice';
import HookUseEffectExample from './HookUseEffectExample'
import UserDetails from './userDetails';
import ProductNames from './Productnames';
import ProductNamesInfo from './ProductNamesInfo';
import ProductFullData from './ProductsFullData';
import UserRegistration from './UserRegistration';
import UserProfile from './UserProfile';
import April8assign1 from './april8assign1';
import April8assign2 from './april8assign2';
import Sample from './sample';
import CheckBoxtest from './april8test';
import Hooks from './usestate and useeffect';
import Comment from './Comment';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import About from './About';
import Contact from './Contact'
import HomePage from './Homepage'
import Employees from './Employees'
import TodoComponent from './TodoComponent'
import MainCommentComponent from './MainCommentComponent'
import MainComponent from './MainComponent';
import ForumComponent from './ForumComponent';
import Authors from './Authors';
import BlogMain from './BlogMain'
import ClassBasedCounter from './ClassBasedCounter';
import UserReg from './april21test';
import {useState, usestate} from 'react';
import RefHook from './useRefHook';
import store from './store/store';
import ReduxCounter from './ReduxCounter';
//this function will run whenever state changes means whenever the counter is called 
store.subscribe(function(){
  const currentState = store.getState();
  console.log('the current value is ' + currentState.count);
})

//we are calling the reducer and passing action as type: counter/increase which will run 
//the switch unction of reducer will increase the count
// store.dispatch({type:'counter/increase'});
// store.dispatch({type:'counter/increase'});
// store.dispatch({type:'counter/increase'});
// store.dispatch({type:'counter/decrease'});
function App() {
  const [step, setStep] = useState(1);
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Link to = '/counter'>ClassBasedCounter</Link>
      <Route path="/counter">
      <input type="number" onChange={(e)=>{setStep(parseInt(e.target.value))}}/>
        <ClassBasedCounter step = {step}/>
      </Route>
      </BrowserRouter> */}
      
      {/* <BrowserRouter>
      <Link to ="/HomePage">HomePage</Link>
      <Link to ="/About">About</Link>
      <Link to ="/Contact">Contact</Link>
      <Link to ="/Employees">Employees</Link>
      <Route path="/Homepage">
        <HomePage/>
      </Route>
      <Route path="/About">
        <About/>
      </Route> <br/>
      <Route path="/Contact">
        <Contact/>
      </Route>
      <Route path="/Employees">
        <Employees/>
      </Route>
  
      </BrowserRouter> */}
      {/* <ProductFullData/>
      <ProductNamesInfo/> */}
      {/* <RandomPrime/> */}
      {/* <TodoLocalStorage/> */}
      {/* <UserRegistration/> */}
      {/* <UserDetails/> */}
      {/* <April8assign2/> */}
      {/* <Sample/> */}
      {/* <Hooks/> */}
      {/* <UserProfile/> */}
      {/* <MainCommentComponent/> */}
      {/* <MainComponent/> */}
      {/* <ForumComponent/> */}
      {/* <Authors/> */}
      <ReduxCounter/>

    </div>
  );
}

export default App;
