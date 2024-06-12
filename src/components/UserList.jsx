import React from 'react';

const UserList = ({ users, editUser, deleteUser }) => {
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user-info">
            <div>
              <h3>Nombre Completo:</h3>
              <p>{user.name}</p>
            </div>
            <div>
              <h3>Correo Electrónico:</h3>
              <p>{user.email}</p>
            </div>
            <div>
              <button className="edit" onClick={() => editUser(user)}>Editar</button>
              <button className="delete" onClick={() => deleteUser(user.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
