import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import StoriesPage from './pages/StoriesPage';
import VolunteeringPage from './pages/VolunteeringPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <div className="container mx-auto p-4"><h1 className="text-2xl font-bold">Home Page</h1></div>} />
          <Route path="/volunteering" component={VolunteeringPage} />
          <Route path="/stories" component={StoriesPage} />
          <Route path="/community" component={CommunityPage} />
          {/* Add other routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;