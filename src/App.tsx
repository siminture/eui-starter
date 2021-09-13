import React from 'react';
import { SidebarLayout } from './components/SidebarLayout';

function App() {
  const contents = [];

  for (let index = 0; index < 100; index++) {
    const element = <h4 key={index}>ROW {index}</h4>;
    contents.push(element);
  }
  return (
    <SidebarLayout>
      <h3>My demo application</h3>
      {contents}
    </SidebarLayout>
  );
}

export default App;
