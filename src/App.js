import React, { useState, useEffect } from 'react';
import DotsLoader from './DotsLoader';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading delay for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="my-component">
      {loading ? <DotsLoader /> : <div>Content Loaded!</div>}
    </div>
  );
};

export default App;

