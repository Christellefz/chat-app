import React from 'react';
import Contact from './components/Contact'
import users from './components/contactList';

function App() {
    return (
    <div className="App">
      {users.map(user=>
      <Contact  avatar = {user.avatar}
                name = {user.name}
                />)}
    </div>
  );
}

export default App;
