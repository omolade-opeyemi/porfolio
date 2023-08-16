import Home from './Home';
import Navbar from './Navbar';
import MovieDetail from './MovieDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie/:id">
            <MovieDetail/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
