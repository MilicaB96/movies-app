import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import AppMovies from "./pages/AppMovies";
import MovieSearch from "./components/MovieSearch";
function App() {
  return (
    <div className='App'>
      <Router>
        <header>
          <MovieSearch />
        </header>
        <nav className='navbar-brand'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <Link className='link-dark text-decoration-none' to='/movies'>
                Movies
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/movies' />} />
          <Route path='/movies'>
            <AppMovies />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
