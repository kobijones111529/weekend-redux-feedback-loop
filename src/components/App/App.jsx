import React from 'react';
import axios from 'axios';
import './App.css';
import { Link, Redirect, Route, HashRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom';
import FeelingPage from '../FeelingPage/FeelingPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportPage from '../SupportPage/SupportPage';
import CommentsPage from '../CommentsPage/CommentsPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import SuccessPage from '../SuccessPage/SuccessPage';
import AdminPage from '../AdminPage/AdminPage';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/feeling" />
          </Route>
          <Route exact path="/feeling">
            <FeelingPage />
          </Route>
          <Route exact path="/understanding">
            <UnderstandingPage />
          </Route>
          <Route exact path="/support">
            <SupportPage />
          </Route>
          <Route exact path="/comments">
            <CommentsPage />
          </Route>
          <Route exact path="/review">
            <ReviewPage />
          </Route>
          <Route exact path="/success">
            <SuccessPage />
          </Route>
          <Route exact path="/admin">
            <AdminPage />
          </Route>
          <Route>
            <p>Couldn't find what you're looking for</p>
            <Link to="/">Home</Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
