import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoriesPage from './pages/StoriesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/StoriesPage" component={StoriesPage} />
          {/* Add other routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;