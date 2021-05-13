import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";
import { ShoppingList } from "./pages/Projects/ShoppingList";
import { BurgerBuilder } from "./pages/Projects/BurgerKing/";
import { GithubFinder } from "./pages/Projects/GithubFinder";
import { Store } from "./pages/Projects/Store";

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
          <Route path="/burger-king" component={BurgerBuilder} />
          <Route path="/github-finder" component={GithubFinder} />
          <Route path="/store" component={Store} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
