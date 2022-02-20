import React, { useState } from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  const [users, setUsers] = useState([])

  const saveUser = (newUser) => {
    setUsers((prevState) => [newUser, ...prevState]);
  }

  return (
    <div>
      <AddUser saveUser={saveUser} />
      <UsersList users={users}/>
    </div>
  );
}

export default App;
