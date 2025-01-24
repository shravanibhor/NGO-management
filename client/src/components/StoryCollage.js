import React from 'react';
import { useHistory } from 'react-router-dom';

const StoryCollage = ({ stories }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/stories/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {stories.map((story) => (
        <div
          key={story.id}
          className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
          onClick={() => handleClick(story.id)}
        >
          <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <p className="text-white text-lg font-bold">{story.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryCollage;