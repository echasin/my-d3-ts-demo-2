"use client";  // Add this to make the page a Client Component

import React from 'react';
import ForceGraph from '../components/ForceGraph';

const data = {
  nodes: [
    { id: 'Node 1' },
    { id: 'Node 2' },
    { id: 'Node 3' },
    { id: 'Node 4' }
  ],
  links: [
    { source: 'Node 1', target: 'Node 2' },
    { source: 'Node 1', target: 'Node 3' },
    { source: 'Node 2', target: 'Node 4' }
  ]
};

const HomePage = () => {
  return (
    <div>
      <h1>Force-Directed Graph</h1>
      <ForceGraph nodes={data.nodes} links={data.links} />
    </div>
  );
};

export default HomePage;