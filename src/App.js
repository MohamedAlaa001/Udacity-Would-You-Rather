import './App.css';

import store from './store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import Login from './components/Login';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import NotFound from './components/layout/NotFound';

import Home from './components/home/Home';
import Leaderboard from './components/leaderboard/Leaderboard';
import QuestionBody from './components/Questions/QuestionBody';
import QuestionForm from './components/Questions/QuestionForm';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/dashboard'>
            <Navbar />
            <div className='d-flex align-items-stretch'>
              <Sidebar />
              <div className='page-content'>
                <Switch>
                  <PrivateRoute exact path='/dashboard' component={Home} />
                  <PrivateRoute
                    exact
                    path='/dashboard/leaderboard'
                    component={Leaderboard}
                  />
                  <PrivateRoute
                    exact
                    path='/dashboard/add'
                    component={QuestionForm}
                  />
                  <PrivateRoute
                    exact
                    path='/dashboard/questions/:question_id'
                    component={QuestionBody}
                  />
                  <Route>
                    <Redirect to='/404' />
                  </Route>
                </Switch>
              </div>
            </div>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
