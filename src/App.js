import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AlbumPage from './pages/AlbumPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Photos</Link>
              </li>
              <li>
                <Link to='/signup'>Sign Up</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/signup'>
              <RegistrationPage />
            </Route>
            <Route path='/'>
              <AlbumPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
