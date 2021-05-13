import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { Blog } from './pages/Blog'
import { About } from './pages/About'
import { ShoppingList } from './pages/Projects/ShoppingList'
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} /> 
          <Route path="/portfolio" component={Portfolio} /> 
          <Route path="/about" component={About} /> 
          <Route path="/shopping-list" component={ShoppingList} /> 
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
