import React, {Component} from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

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
        <BurgerBuilder> </BurgerBuilder>
      </Layout>
    </div>)
  }
}

export default App;
