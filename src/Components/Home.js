import React from 'react';

const Home = ({ title }) => {
  return (
    <div>
      {title === 'first' ? (
        <div>
          <img src="https://via.placeholder.com/150" alt="Article" />
          <a href="#link">Read more</a>
        </div>
      ) : title === 'second' ? (
        <p>This is the second article.</p>
      ) : (
        <p>No article found.</p>
      )}
    </div>
  );
};

export default Home;
