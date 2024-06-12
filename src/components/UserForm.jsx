import React, { useState, useEffect } from 'react';
import '../styles.css'; 

const UserForm = ({ addUser, updateUser, currentUser, setCurrentUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setIsEditing(true); // Estamos editando un usuario existente
    } else {
      setName('');
      setEmail('');
      setIsEditing(false); // Estamos agregando un nuevo usuario
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      if (isEditing) {
        // Actualizar usuario existente
        updateUser(currentUser.id, { name, email });
        setCurrentUser(null); // Limpiar usuario actual después de la actualización
      } else {
        // Agregar nuevo usuario
        addUser({ name, email });
      }
      setName('');
      setEmail('');
    }
  };

  return (
    <div>
      <h2>{isEditing ? 'Editar Usuario' : 'Agregar Usuario'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className={`btn ${isEditing ? 'btn-update' : 'btn-add'}`}>
          {isEditing ? 'Actualizar Usuario' : 'Agregar Usuario'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
