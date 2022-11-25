import './App.css';
import { Route, Switch } from 'react-router-dom';
import Projects from './Pages/projects';
import About from './Pages/about';

function App() {
  return (
    <Switch>
      <Route path="/projects" component={ Projects } />
      <Route path="/" component={ About } />
    </Switch>
  );
}

export default App;
