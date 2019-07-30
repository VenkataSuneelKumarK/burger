import React, {Component} from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route, Switch} from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       Hello world
//     </div>
//   );
// }

class App extends Component{
  render(){
    return(<div>
      <Layout>
        <Switch>
          <Route path='/' exact component={BurgerBuilder}/>
          <Route path='/Checkout' component={Checkout}/>
        </Switch>
      </Layout>
    </div>)
  }
}

export default App;
