import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { Project } from './pages/Project'
import { Blog } from './pages/Blog'
import { About } from './pages/About'
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} /> 
          <Route path="/project" component={Project} /> 
          <Route path="/about" component={About} /> 
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
