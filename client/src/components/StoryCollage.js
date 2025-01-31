import React from 'react';
import { useHistory } from 'react-router-dom';

const StoryCollage = ({ stories }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/stories/${id}`);
  };

  // Utility function to determine spans dynamically
  const getGridSpans = (index) => {
    const spans = [
      'col-span-6 row-span-3', // Larger block
      'col-span-4 row-span-2',
      'col-span-3 row-span-3',
      'col-span-5 row-span-2',
      'col-span-4 row-span-4', // Tall block
    ];
    return spans[index % spans.length];
  };

  return (
    <div className="grid grid-cols-12 auto-rows-min gap-4 p-4">
      {stories.map((story, index) => (
        <div
          key={story.id}
          className={`relative cursor-pointer overflow-hidden rounded-lg shadow-lg ${getGridSpans(
            index
          )}`}
          onClick={() => handleClick(story.id)}
        >
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <p className="text-white text-lg font-bold">{story.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryCollage;
