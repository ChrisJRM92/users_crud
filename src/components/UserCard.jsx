
const UserCard = ({ user, deleteUser, setUserSelected }) => {

    const handleDelete = () =>{
      deleteUser(user?.id)
    }

    const handleEdit = () =>{
      setUserSelected(user)
    }

  return (
    <article>
        <h3>{user?.first_name} {user?.last_name}</h3>
        <hr />
        <ul>
            <li>
                <span>Correo</span>
                <span>{user?.email}</span>
            </li>
            <li>
                <span>Cumpleaños</span>
                <span>{user?.birthday}</span>
            </li>
        </ul>
        <button onClick={handleDelete}>Borrar</button>
        <button onClick={handleEdit}>Editar</button>
    </article>
  )
}

export default UserCard