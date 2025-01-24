import React, { useState, useEffect } from 'react';
import StoryCollage from '../components/StoryCollage';
import StoryDetail from '../components/storyDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const StoriesPage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Fetch stories from an API or use static data
    const fetchedStories = [
      { id: '1', title: 'Story 1', image: 'https://via.placeholder.com/300x200', content: 'Full story content 1' },
      { id: '2', title: 'Story 2', image: 'https://via.placeholder.com/400x300', content: 'Full story content 2' },
      { id: '3', title: 'Story 3', image: 'https://via.placeholder.com/500x400', content: 'Full story content 3' },
      { id: '4', title: 'Story 4', image: 'https://via.placeholder.com/600x500', content: 'Full story content 4' },
      { id: '5', title: 'Story 5', image: 'https://via.placeholder.com/700x600', content: 'Full story content 5' },
      { id: '6', title: 'Story 6', image: 'https://via.placeholder.com/800x700', content: 'Full story content 6' },
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