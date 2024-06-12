import React, { useState } from 'react';
import './styles.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    user.id = Date.now();
    setUsers([...users, user]);
  };

  const editUser = (user) => {
    setCurrentUser(user);
  };

  const updateUser = (id, updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...updatedUser } : user
    );
    setUsers(updatedUsers);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="container">
      <h1>Administrador de Usuarios</h1>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
