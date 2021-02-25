import React, {Component} from 'react';
import './App.css'

//Did little experimental changes

// import Greet from './component/Greet'
// import Welcome from './component/Welcome'
// import Message from './component/Message'
// import Counter from './component/Counter'
// import FunctionClick from './component/FunctionClick'
// import ClassClick from './component/ClassClick'
// import EventBind from './component/EventBind'
// import ParentComponent from './component/ParentComponent'
import UserGreeting from './component/UserGreeting'

class App extends Component 
{
  render() {
  return (
    <div className='App'> 
      <h1>Welcome</h1>
      <UserGreeting/>
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Counter/> */}
      {/* <Greet name='Golam Kibria' heroName='Mac'/>              
      <Greet name='Golam Ambia' heroName='Mac'/>
      <Greet name='Golam Kibria' heroName='Mac'/> */}
      {/* <Welcome name='Golam Kibria'/> */}
      {/* <Message/> */}
    </div>
  )
}
}

export default App;
