import './App.css';
import { Route, Switch } from 'react-router-dom';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <Switch>
      <Route path="/contact" component={ Contact }/>
      <Route path="/projects" component={ Projects } />
      <Route path="/" component={ About } />
    </Switch>
  );
}

export default App;
