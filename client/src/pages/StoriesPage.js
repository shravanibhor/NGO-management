import React, { useState, useEffect } from 'react';
import StoryCollage from '../components/StoryCollage';
import StoryDetail from '../components/storyDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const StoriesPage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Fetch stories from an API or use static data
    const fetchedStories = [
      { id: '1', title: 'Story 1', image: '/path/to/image1.jpg', content: 'Full story content 1' },
      { id: '2', title: 'Story 2', image: '/path/to/image2.jpg', content: 'Full story content 2' },
      // Add more stories here
    ];
    setStories(fetchedStories);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/stories">
          <StoryCollage stories={stories} />
        </Route>
        <Route path="/stories/:id">
          <StoryDetail stories={stories} />
        </Route>
      </Switch>
    </Router>
  );
};

export default StoriesPage;