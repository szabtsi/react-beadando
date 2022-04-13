import NavigationBar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Comments from './Comments';
import Contacts from './Contacts';
import { Route, Switch, } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <NavigationBar />
      
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/about" component={About}>
         <About />
        </Route>
        <Route path="/services" component={Services}>
         <Services />
        </Route>
        <Route path="/comments" component={Comments}>
         <Comments />
        </Route>
        <Route path="/contacts" component={Contacts}>
         <Contacts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
