import React, { Component } from 'react';
import routes from './routes'
import Nav from './Nav'



export default class App extends Component {
  render(){
    return (
      <div className="App">
      <Nav/>
      {routes}
      </div>
    )
  }  
  }



// function App(){
//   return(
//     <div className="App">
//       <Nav/>
//       {routes}
//     </div>
//   )
// }
// export default App;