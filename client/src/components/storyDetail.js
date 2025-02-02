import React from 'react';
import { useParams } from 'react-router-dom';

const StoryDetail = ({ stories }) => {
  const { id } = useParams();
  const story = stories.find((story) => story.id === id);

  if (!story) {
    return <p>Story not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <img src={story.image} alt={story.title} className="w-full h-auto rounded-lg shadow-lg" />
      <h1 className="mt-4 text-2xl font-bold">{story.title}</h1>
      <p className="mt-4">{story.content}</p>
    </div>
  );
};

export default StoryDetail;