import React from 'react';
import { useHistory } from 'react-router-dom';

const StoryCollage = ({ stories }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/stories/${id}`);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {stories.map((story) => (
        <div
          key={story.id}
          className="w-48 cursor-pointer"
          onClick={() => handleClick(story.id)}
        >
          <img src={story.image} alt={story.title} className="w-full h-auto" />
          <p className="text-center mt-2">{story.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryCollage;