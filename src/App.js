import React from 'react';

import Contact from './components/Contact'

function App() {
    return (
    <div className="App">
      <Contact  avatar ='https://randomuser.me/api/portraits/men/79.jpg' 
                myName = 'Poulet tandori'
                online />
      <Contact  avatar ='https://randomuser.me/api/portraits/women/67.jpg' 
                myName = 'Poulet frit'
                online 
                />
      <Contact  avatar ='https://randomuser.me/api/portraits/women/50.jpg' 
                myName = 'Poulet rôti'/>
    </div>
  );
}

export default App;
